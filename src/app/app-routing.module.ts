import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Employees', pathMatch: 'full' },
  { path: 'Employees', component: EmployeeListComponent },
  { path: 'DetailsEmployee/:id', component: EmployeeDetailsComponent },
  { path: 'CreateEmployee', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
