import { Component, OnInit } from '@angular/core';
import { Report } from '../report/report.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: any[];

  constructor(private http: HttpClient) {
    this.reports = []
   }
  
  ngOnInit(): void {
    this.http.get<Object>('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/')
      .subscribe((data: any) => {
        // this.reports = data
        // console.log(this.reports)
        this.reports = []
        for (let i = 0; i < data.length; i++){
          this.reports.push(data[i].data)
        }
    })
  }

  onReportDelete(evt: any) {
    console.log(evt["ind"].id)
    this.http.delete<Object>(`https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/${evt["ind"].id}/`)
      .subscribe((data: any) => {
        this.ngOnInit();
        console.log("delete successfull")
    })
  }
}
