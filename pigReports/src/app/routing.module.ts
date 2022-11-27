import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReportDisplayComponent } from './report-display/report-display.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportInfoComponent } from './report-info/report-info.component';

const appRoutes: Routes = [
  { path: '', component: ReportListComponent},
  { path: 'add', component: ReportFormComponent },
  {path: 'info/:id', component: ReportInfoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class RoutingModule { }
