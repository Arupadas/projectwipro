import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,  data: { role: 'Administrator' } },
  { path: 'manager', component: ManagerComponent,  data: { role: 'Manager' } },
  { path: 'employee', component: EmployeeComponent,data: { role: 'Employee' } },
  { path: '**', redirectTo: 'login' } // Redirect any unmatched routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
