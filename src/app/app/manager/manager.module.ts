import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BatchesComponent } from './batches/batches.component';
import { CourseCalenderComponent } from './course-calender/course-calender.component';
import { ParticipantRequestComponent } from './participant-request/participant-request.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    BatchesComponent,
    CourseCalenderComponent,
    ParticipantRequestComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
