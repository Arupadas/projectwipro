import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course-component/course-component.component';
import { CourseCalendarComponent } from './course-calendar/course-calendar.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { BatchManagementComponent } from './batch-management/batch-management.component';
import { BatchesComponent } from './app/manager/batches/batches.component';
import { ParticipantRequestComponent } from './app/manager/participant-request/participant-request.component';
import { UserManagementComponent } from './user-management/user-management.component';




const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseComponent },
  { path: 'admin', component: AdminComponent },
  { path:'manager-dashboard', loadChildren:()=> import('./app/manager/manager.module').then(m=>m.ManagerModule), data:{role:'Manager'}},
  { path: 'batches', component: BatchesComponent },
  { path: 'approval', component: ParticipantRequestComponent },
  { path: 'employee-dashboard', component: EmployeeComponent},
  { path: 'calendar', component: CourseCalendarComponent},
  { path: 'course-management', component: CourseManagementComponent},
  {path : 'batch-management' , component :BatchManagementComponent} ,
  {path : 'user-management' , component :UserManagementComponent} ,



  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "home", component: HomeComponent }, // Redirect any unmatched routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

