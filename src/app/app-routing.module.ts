import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course-component/course-component.component';
import { CourseCalendarComponent } from './course-calendar/course-calendar.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { BatchManagementComponent } from './batch-management/batch-management.component';
import { BatchesComponent } from './app/manager/batches/batches.component';
import { ParticipantRequestComponent } from './app/manager/participant-request/participant-request.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseComponent },
  { path: 'admin', component: AdminComponent },
  { path:'manager-dashboard', loadChildren:()=> import('./app/manager/manager.module').then(m=>m.ManagerModule), data:{role:'Manager'}},
  { path: 'batches', component: BatchesComponent },
  { path: 'approval', component: ParticipantRequestComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'calendar', component: CourseCalendarComponent},
  { path: 'course-management', component: CourseManagementComponent},
  {path : 'batch-management' , component :BatchManagementComponent} ,


  { path: '**', redirectTo: 'login' } // Redirect any unmatched routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

