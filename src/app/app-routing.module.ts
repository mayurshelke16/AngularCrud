import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';


const routes: Routes = [
  {path:'log',component:LoginComponent},
  {path:'addemp',component:AddEmployeeComponent},
  {path:'showdata',component:ShowdetailComponent},
  {path:'del/:id',component:DeleteemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
