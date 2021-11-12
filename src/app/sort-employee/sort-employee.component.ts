import { Component, OnInit } from '@angular/core';
import { Employee } from './../../Model/Employee.model';
import { EmpService } from './../emp.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sort-employee',
  templateUrl: './sort-employee.component.html',
  styleUrls: ['./sort-employee.component.scss']
})
export class SortEmployeeComponent implements OnInit {

emp:Employee[]=[];
  constructor(private EmpService:EmpService,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {

    this.EmpService.allDataget().subscribe(rs=>{
      this.emp=rs;
      this.sort();
       console.log(this.emp);
    });
     
  }

sort()
{
  this.EmpService.sortByDOB().subscribe(rs=>{
    this.emp=rs;
   //  this.router.navigate(['/showdata']);
    console.log(this.emp);
  });
}

}
