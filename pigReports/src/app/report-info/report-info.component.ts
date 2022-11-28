import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { Report } from '../report/report.service';


@Component({
  selector: 'app-report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.css']
})
export class ReportInfoComponent implements OnInit {
  id: any;
  report: Report;
  constructor(private ActivatedRoute: ActivatedRoute, private http: HttpClient) { 
    this.report = new Report()
  }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.http.get(`https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/${this.id}/`)
      .subscribe((data: any) => {
        this.report = data.data
    })
  }

}
