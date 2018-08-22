import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)='onClick()' >Click Me</button>
  <br/><br/>
  <button on-click='onClick()' >Click Me</button>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onClick() : void {
  console.log('Button Clicked');
}

}
