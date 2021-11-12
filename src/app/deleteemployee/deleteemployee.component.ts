import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.scss']
})
export class DeleteemployeeComponent implements OnInit {

  constructor(private EmpService:EmpService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      console.log(params.get('id'));
      this.EmpService.deleteEmp(params.get('id')).subscribe(rs=>{
         this.route.navigate(['/showdata']);
      })
    })
  }

}
