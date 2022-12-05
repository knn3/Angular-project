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
  @Output() update = new EventEmitter()


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
    evt["ind"] = ind
    this.delete.emit(evt)
    console.log(this.reports)

  }

  onMoreInfo(evt: any, report: any) {
    this.router.navigate(["/info", report.id])
  }

  onChangeStatus(evt: any, ind: any) {
    evt["ind"] = ind
    this.update.emit(evt)
  }

  onLocationSort(evt: any) {
    this.reports.sort(this.compareLoc)
  }
  onNameSort(evt: any) {
    this.reports.sort(this.compareName)
  }
  onTimeSort(evt: any) {
    this.reports.sort(this.compareTime)
  }

  compareLoc(a: any, b: any) {
    if ( a.location < b.location ){
      return -1;
    }
    if ( a.location > b.location ){
      return 1;
    }
    return 0;
  }
  compareName(a: any, b: any) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  compareTime(a: any, b: any) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }
}
