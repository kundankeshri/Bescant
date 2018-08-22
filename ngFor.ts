ngFor Directive :-

----------------------------------------------
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
                    </tr>
                </thead>
                    <tbody>
                        <tr *ngFor ='let employee of employees'>
                          <td>{{employee.code}}</td>
                          <td>{{employee.name}}</td>
                          <td>{{employee.gender}}</td>
                          <td>{{employee.annualSalary}}</td>
                        </tr>
                        <tr *ngIf='!employees || employees.length == 0 '>
                          <td colspan="5">No Employees to display</td>
                        </tr>
                    </tbody>
            </table>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees : any[] = [
    {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500},
    {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000},
    {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500}
    {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000}
  ]

}

