import { Employee } from './../Model/Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs';
//import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  authenticate(name: any, email: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  url='http://localhost:8181';


addEmployee(emp)
{
  console.log("In service :"  +emp);

  return this.http.post(this.url+'/adminadd',emp);

}

allDataget()
{
  return this.http.get<Employee[]>(this.url+'/show');
}

sortByDOB()
{
return this.http.get<Employee[]>(this.url+'/sortdob');
}

editdata(id)
{

  return this.http.get<Employee>(this.url+'/admin/'+id);
}
updating(emp)
{

  return this.http.put<Employee[]>(this.url+'/update',emp);
}
deleteEmp(id)
{
  
  return this.http.delete<Employee[]>(this.url+'/'+id);
}


login(name,email)
{
  console.log("in login service");
return this.http.get<Employee[]>(this.url+'/check'+'/'+name+'/'+email);
}


}

