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
                          <td>{{employee.code }}</td>
                          <td>{{employee.name | customPipe : employee.gender }}</td>
                          <td>{{employee.gender | lowercase}}</td>
                          <td>{{employee.annualSalary | currency :'USD' :false :'1.2' | lowercase}}</td>
                          <td>{{employee.dateOfBirth }}</td>
                        </tr>

                    </tbody>
            </table>
            <br/>

            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees : any[]
 constructor(){
   this.employees = [
     {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500,dateOfBirth : '5/16/1988'},
     {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000.123456 , dateOfBirth : '6/16/1989'},
     {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500 , dateOfBirth : '5/16/1980'},
     {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000 , dateOfBirth : '2/6/1998'}
   ]
 }
  
  trackByEmployeeCode(index: number , employee: any):string{
    return employee.code;
  }

}
