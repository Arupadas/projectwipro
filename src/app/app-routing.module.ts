import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course-component/course-component.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent},
  { path: 'employee', component: EmployeeComponent},

  { path: '**', redirectTo: 'login' } // Redirect any unmatched routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

