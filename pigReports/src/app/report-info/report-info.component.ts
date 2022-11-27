import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.css']
})
export class ReportInfoComponent implements OnInit {
  id: any;
  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id')
  }

}
