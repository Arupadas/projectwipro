import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {BatchesComponent } from './batches/batches.component';
import { CourseCalenderManagerComponent } from './course-calender/course-calender.component';
import { ParticipantRequestComponent } from './participant-request/participant-request.component';
import {CourseListComponent } from "./courses-list/courses-list.component"
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'batches', component: BatchesComponent },
  {path: "courses", component: CourseCalenderManagerComponent },
  { path: 'approval', component: ParticipantRequestComponent },
  {path : 'courseList' , component :CourseListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
