import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin/admin.component';
//import { ManagerComponent } from './manager/manager.component';
//import { EmployeeComponent } from './employee/employee.component';

//import { ManagerComponent } from './manager/manager.component';
import { AppComponent } from './app.component';
import { ParticipantRequestComponent } from './app/manager/participant-request/participant-request.component';
import { CourseCalenderComponent } from './app/manager/course-calender/course-calender.component';
import { BatchesComponent } from './app/manager/batches/batches.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,  data: { role: 'Administrator' } },
  { path:'manager-dashboard', loadChildren:()=> import('./app/manager/manager.module').then(m=>m.ManagerModule), data:{role:'Manager'}},
 { path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'batches', component: BatchesComponent },
  //{path: "course-calender", component: CourseCalenderComponent },
  //{ path: 'participant-requests', component: ParticipantRequestComponent },
 // { path: 'manager', component: ManagerComponent,  data: { role: 'Manager' } },
 // { path: 'employee', component: EmployeeComponent,data: { role: 'Employee' } },
  { path: 'admin', component: AdminComponent },
 // { path: 'manager', component: ManagerComponent},
  { path: '**', redirectTo: 'login' } // Redirect any unmatched routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

