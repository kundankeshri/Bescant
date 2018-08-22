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
                       <th>Index</th>
                       <th>Is First</th>
                       <th>Is Last</th>
                       <th>Is Even</th>
                       <th>Is Odd</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr *ngFor ='let employee of employees;trackBy:trackByEmployeeCode;let i = index;let isFirst = first;let isLast = last; let isEven = even; let isOdd = odd;'>
                          <td>{{employee.code}}</td>
                          <td>{{employee.name}}</td>
                          <td>{{employee.gender}}</td>
                          <td>{{employee.annualSalary}}</td>
                          <td>{{i}}</td>
                          <td>{{isFirst}}</td>
                          <td>{{isLast}}</td>
                          <td>{{isEven}}</td>
                          <td>{{isOdd}}</td>
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
     {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500},
     {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000},
     {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500}
     {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000}
   ]
 }
  getEmployee() : void{
    this.employees = [
      {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500},
      {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000},
      {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500},
      {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000},
      {code:'emp105',name:'Com',gender:'Female',annualSalary:6000}
    ]
  }
  trackByEmployeeCode(index: number , employee: any):string{
    return employee.code;
  }

}
