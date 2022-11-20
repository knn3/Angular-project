import { Component, OnInit } from '@angular/core';
import { Report } from '../report/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[];

  constructor() {
    this.reports = []
   }

  ngOnInit(): void {
  }

}
