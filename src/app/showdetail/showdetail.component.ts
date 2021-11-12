import { Employee } from './../../Model/Employee.model';
import { EmpService } from './../emp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.scss']
})
export class ShowdetailComponent implements OnInit {

  constructor(private EmpService:EmpService) { }

  emp:Employee[]=[];
 
  showDiv :boolean=true;
     editDiv :boolean=false;

   employee=new Employee();
 
  ngOnInit(): void {

    this.EmpService.allDataget().subscribe(rs=>{
      this.emp=rs;
       console.log(this.emp);
    });

  }

  editdata(id)
  {
    console.log(id);
    this.showDiv=false;
    this.editDiv=true;
    this.EmpService.editdata(id).subscribe(rs=>{

      console.log(rs);
       this.employee=rs;
    });
  }

  updating(employee){
    console.log(employee);
    this.EmpService.updating(employee).subscribe(rs=>{
      this.emp=rs;
    });
   }

  
}
