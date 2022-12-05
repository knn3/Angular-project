import { Component, OnInit } from '@angular/core';
import { Report } from '../report/report.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: any[];
  locations: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.reports = []
    this.locations = []
   }
  
  ngOnInit(): void {
    this.http.get<Object>('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/')
      .subscribe((data: any) => {
        // this.reports = data
        // console.log(this.reports)
        this.reports = []
        for (let i = 0; i < data.length; i++){
          this.reports.push(data[i].data)
          if (this.locations.indexOf(data[i].data.location) === -1) {
            this.locations.push(
              {
                location: data[i].data.location,
                longitude: data[i].data.longitude,
                latitude: data[i].data.latitude
              })
          }
        }
    })
  }

  onReportDelete(evt: any) {
    let password = prompt("Please enter the password:", "");
    this.http.get<Object>('https://api.hashify.net/hash/md5/hex?value=' + password)
      .subscribe((data: any) => {
        if (data.Digest != "84892b91ef3bf9d216bbc6e88d74a77c") {
          alert("Wrong password!")
        }
        else {
            this.http.delete<Object>(`https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/${evt["ind"].id}/`)
            .subscribe((data: any) => {
              this.ngOnInit();
              console.log("delete successfull")
              window.location.reload()              
            })          
        }
    })
  }

  onReportUpdate(evt: any) {

    let password = prompt("Please enter the password:", "");
    this.http.get<Object>('https://api.hashify.net/hash/md5/hex?value=' + password)
      .subscribe((data: any) => {
        if (data.Digest != "84892b91ef3bf9d216bbc6e88d74a77c") {
          alert("Wrong password!")
        }
        else {
          if (evt["ind"].status) {
            evt["ind"].status = false;
          }
          else
            evt["ind"].status = true;
        
          this.http.put<Object>(`https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/${evt["ind"].id}`,
            { "key": evt["ind"].id, "data": evt["ind"] })
            .subscribe((data: any) => {
              console.log("updated")
            })
        }
    })
  }

  onCreate() {
    this.router.navigate(['/add'])
  }
}
