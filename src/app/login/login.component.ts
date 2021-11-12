import { EmpService } from './../emp.service';
import { Employee } from './../../Model/Employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Employee: Employee[];
public name:string;
public email:string;
  constructor(private EmpService:EmpService,private router: Router) { }

  emp=new Employee();
  ngOnInit() {

  }

  login()
  {
    console.log(" in login method");
       this.EmpService.login(this.name,this.email).subscribe(rs=>{

      console.log(rs);
       this.Employee=rs;
      });
  }


    }
  



