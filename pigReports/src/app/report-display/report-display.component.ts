import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report-display',
  templateUrl: './report-display.component.html',
  styleUrls: ['./report-display.component.css']
})
export class ReportDisplayComponent implements OnInit {
  
  @Input() reports: any;
  @Output() delete = new EventEmitter()


  // reports: any[];

  constructor(private router: Router) {
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

  onDelete(evt:any,ind:any){
    console.log(ind)
    evt["ind"] = ind
    this.delete.emit(evt)
  }

  onMoreInfo(evt: any, report: any) {
    this.router.navigate(["/info", report.id])
  }
}
