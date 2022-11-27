import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  
  form: FormGroup;
  allReports: any[];


  constructor(private http: HttpClient, private router: Router) { 
    let formControl = {
      name: new FormControl(null),
      phoneNum: new FormControl(null),
      Pid: new FormControl(null),
      breed: new FormControl(null),
      location: new FormControl(null),
      longitude: new FormControl(null),
      latitude: new FormControl(null),
      extraNote: new FormControl(null),
      date: new FormControl(new Date().getTime()),
      time: new FormControl(new Date().getTime()),
      status: new FormControl(false),
      id: new FormControl(null)
    }
    this.allReports = [];
    this.form = new FormGroup(formControl)
  }

  ngOnInit(): void {
    this.http.get<Object>('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/')
      .subscribe((data: any) => {
        this.allReports = []
        for (let i = 0; i < data.length; i++){
          this.allReports.push(data[i].data)
        }
    })
  }

  onSubmit(values: any) {
    console.log(this.form.value)
    this.form.value.date = new Date().getTime();
    this.form.value.time = new Date().getTime();
    if (!this.allReports.length) {
      this.form.value.id = 0
    }
    else {
      this.form.value.id = this.allReports[this.allReports.length - 1].id + 1;
    }

    this.http.post('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/',
      { "key": `${this.form.value.id}`, "data": this.form.value }
    ).subscribe((data: any) => {
      console.log("post: ")
      console.log(data)
      this.ngOnInit()
      this.router.navigate(["/"])

    })
    
  }
}
