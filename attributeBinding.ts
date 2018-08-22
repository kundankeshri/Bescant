import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <table>
              <thead>
                <!--<th attr.colspan="{{colspan}}">Employee Details</th> -->
                <th [attr.colspan]="colspan">Employee Details</th>
              </thead>
              <tbody>
                <tr>
                   <td>FirstName</td>
                   <td>{{FirstName}}</td>
                </tr>
                <tr>
                   <td>LastName</td>
                   <td>{{LastName}}</td>
                </tr>
                <tr>
                   <td>Gender</td>
                   <td>{{Gender}}</td>
                </tr>
                </tbody>
              </table>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colspan :number =2;



}
