import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  
  form: FormGroup;

  constructor() { 
    let formControl = {}
    
    this.form = new FormGroup(formControl)
  }

  ngOnInit(): void {
  }

  onSubmit(values: any) {
    console.log(values)
  }
}
