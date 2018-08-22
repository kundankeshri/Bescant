import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<table  border="1">
                <thead>
                    <tr>
                       <th>Code</th>
                       <th>Name</th>
                       <th>Gender</th>
                       <th>Annual Salary</th>
                       <th>Date Of Birth</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr *ngFor ='let employee of employees;trackBy:trackByEmployeeCode;'>
                          <td>{{employee.code | uppercase}}</td>
                          <td>{{employee.name}}</td>
                          <td>{{employee.gender}}</td>
                          <td>{{employee.annualSalary | currency :'USD' :true :'1.3-3'}}</td>
                          <td>{{employee.dateOfBirth | date :'fullDate' | uppercase}}</td>
                        </tr>

                    </tbody>
            </table>
            <br/>
            <button (click)='getEmployee()'>Refresh Employees</button>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees : any[]
 constructor(){
   this.employees = [
     {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500,dateOfBirth : '5/16/1988'},
     {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000 , dateOfBirth : '6/16/1989'},
     {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500 , dateOfBirth : '5/16/1980'}
     {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000 , dateOfBirth : '2/6/1998'}
   ]
 }
  getEmployee() : void{
    this.employees = [
      {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500,dateOfBirth : '25/6/1988'},
      {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000 , dateOfBirth : '26/6/1989'},
      {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500 , dateOfBirth : '5/16/1980'}
      {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000 , dateOfBirth : '2/6/1998'},
      {code:'emp105',name:'Com',gender:'Female',annualSalary:6000 ,dateOfBirth : '2/6/2007'}
    ]
  }
  trackByEmployeeCode(index: number , employee: any):string{
    return employee.code;
  }

}
