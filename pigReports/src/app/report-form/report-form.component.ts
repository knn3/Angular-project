import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  locationName = false
  check = false
  form: FormGroup;
  allReports: any[];
  locations: string[];
  coordinates: any[];

  constructor(private http: HttpClient, private router: Router) { 
    let formControl = {
      name: new FormControl(null, [
        Validators.required
      ]),
      phoneNum: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]{1,10}$")
      ]),
      Pid:new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      breed:new FormControl(null, [
        Validators.required
      ]),
      location: new FormControl(null, [
        Validators.required
      ]),
      longitude: new FormControl(null, [
        Validators.required
      ]),
      latitude: new FormControl(null, [
        Validators.required
      ]),
      extraNote: new FormControl(null),
      date: new FormControl(new Date().getTime()),
      time: new FormControl(new Date().getTime()),
      status: new FormControl(false),
      id: new FormControl(null)
    }
    this.allReports = [];
    this.locations = []
    this.coordinates = []
    this.form = new FormGroup(formControl)
  }

  ngOnInit(): void {
    this.http.get<Object>('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/')
      .subscribe((data: any) => {
        this.allReports = []
        for (let i = 0; i < data.length; i++){
          this.allReports.push(data[i].data)
          if (this.locations.indexOf(data[i].data.location) === -1) {
            this.locations.push(data[i].data.location)
            this.coordinates.push({
              longitude: data[i].data.longitude,
              latitude: data[i].data.latitude
            })
          }
        }
    })
  }

  onSubmit(values: any) {
    if (!this.form.valid) {
      alert("Please make sure to enter all the information!")
      this.check = true
    }
    else {
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
        this.ngOnInit()
        this.router.navigate(["/"])

      })
    }
  }

  mySelectHandler(evt: any) {
    if (this.form.value.location == "Enter a location:") {
      this.locationName = true
    }
    else 
      this.locationName = false
  }


  get name() { return this.form.get('name'); }
  get Pid() { return this.form.get('Pid'); }
  get phoneNum() { return this.form.get('phoneNum'); }
  get breed() { return this.form.get('breed'); }
  get location() { return this.form.get('location'); }
  get longitude() { return this.form.get('longitude'); }
  get latitude() { return this.form.get('latitude'); }
  get extraNote() { return this.form.get('extraNote'); }



}


// on click on some option, take that index and change with coors correspond 