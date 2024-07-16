import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {BatchesComponent } from './batches/batches.component';
import { CourseCalenderComponent } from './course-calender/course-calender.component';
import { ParticipantRequestComponent } from './participant-request/participant-request.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'batches', component: BatchesComponent },
  {path: "course-calender", component: CourseCalenderComponent },
  { path: 'participant-requests', component: ParticipantRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
