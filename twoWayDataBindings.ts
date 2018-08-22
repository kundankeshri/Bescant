import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          Name : <input [value]='name' />
          <br/>
          You Entered : {{name}}
          <br/><br/>
          Name : <input [value]='name1' (input)='name1= $event.target.value'/>
          <br/>
          You Entered : {{name1}}
          <br/><br/>
          Name : <input  [(ngModel)] = 'name2'/>
          <br/>
          You Entered : {{name2}}
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name : string = 'Tom';
name1 : string = 'Tim';
name2 : string = 'Kundan';

}
