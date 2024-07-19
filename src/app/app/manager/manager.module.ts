import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BatchesComponent } from './batches/batches.component';
import { CourseCalenderManagerComponent } from './course-calender/course-calender.component';
import { ParticipantRequestComponent } from './participant-request/participant-request.component';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular'
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import{CourseListComponent} from "./courses-list/courses-list.component"
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';




@NgModule({
  declarations: [
    LandingPageComponent,
    BatchesComponent,
    CourseCalenderManagerComponent,
    ParticipantRequestComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    MbscModule,
    FullCalendarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ]
})
export class ManagerModule {}
 
