import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthService } from '../auth/auth.service';
import { BatchManagementComponent } from './batch-management/batch-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportComponent } from './report/report.component';
import { CourseManagementComponent } from './course-management/course-management.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    EmployeeComponent,
    
    BatchManagementComponent,
    UserManagementComponent,
    ReportComponent,
    CourseManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [
    AuthService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
