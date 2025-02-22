import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthService } from '../auth/auth.service';
import { BatchManagementComponent } from './batch-management/batch-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportComponent } from './report/report.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar
import { CourseCalendarComponent } from './course-calendar/course-calendar.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CourseComponent } from './course-component/course-component.component';
import { CourseService } from './Services/courseview.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import { MatDivider } from '@angular/material/divider';
import { BatchService } from './Services/batch.service';



import { MbscModule } from '@mobiscroll/angular';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    EmployeeComponent,
    HomeComponent,
    BatchManagementComponent,
    UserManagementComponent,
    ReportComponent,
    CourseManagementComponent,
    CourseCalendarComponent,
    ViewReportComponent,
    CourseComponent ,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule  ,
    FullCalendarModule ,
    MatCardModule,
    MatSelectModule ,
    MatFormFieldModule,
    MatListModule,
    MatDivider ,
    MatIconModule,
    MbscModule
  
  ],
  providers: [
    AuthService,
    provideAnimationsAsync(),
    //CourseService ,
    BatchService ,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
