import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-display',
  templateUrl: './report-display.component.html',
  styleUrls: ['./report-display.component.css']
})
export class ReportDisplayComponent implements OnInit {
  
  @Input() reports: any;

  // reports: any[];

  constructor() {
    // this.reports = [{
    //   name: 'hello',
    //   time: new Date().getDate()
    // },
    // {
    //   name: 'world',
    //   time: new Date().getDate()
    //   },
    // {
    //   name: 'new',
    //   time: new Date().getDate()
    //   },
    // {
    //   name: 'hi',
    //   time: new Date().getDate()
    // }]
   }

  ngOnInit(): void {
  }

}
