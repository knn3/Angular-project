import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  
  form: FormGroup;

  constructor() { 
    let formControl = {
      name: new FormControl(null),
      phoneNum: new FormControl(null),
      Pid: new FormControl(null),
      breed: new FormControl(null),
      location: new FormControl(null),
      longitude: new FormControl(null),
      latitude: new FormControl(null),
      extraNote: new FormControl(null)
    }
    
    this.form = new FormGroup(formControl)
  }

  ngOnInit(): void {
  }

  onSubmit(values: any) {
    console.log(this.form.value)
  }
}
