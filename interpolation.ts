import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>Hello {{title}}</h1>
                <h2>{{'Page Header ' +pageHeader}}</h2>
                <h2>{{'SumNumber ' + (10+20+30)}}</h2>
                <h2>{{pageName ? pageName : ' Keshri' }}</h2>
                <h2>FullName: - {{getFullName()}}</h2>
                <img src = '{{imagePath}}'/>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular2';
  pageHeader : string = 'Employee Details';
  pageName :string = 'Kundan';
  imagePath : string = 'https://s.abcnews.com/images/International/pandas2-rex-ml-171220_16x9_992.jpg';
  firstName :string = 'Rajiv';
  lastName : string = 'Thakur';

  getFullName() :string {
    return this.firstName+' '+this.lastName;
  }
}
