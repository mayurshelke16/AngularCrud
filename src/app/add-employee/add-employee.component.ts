import { Employee } from './../../Model/Employee.model';
import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private EmpService:EmpService) { }

  ngOnInit() {
   
  }
  emp= new Employee();


  m1(){
    console.log(this.emp);
    
    this.EmpService.addEmployee(this.emp).subscribe(rs=>this.emp.id);
   
    //this.EmpService.sendmail();
  
  }
}
