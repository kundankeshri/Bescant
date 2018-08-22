import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button style='color:red'[style.font-weight]="isBold ? 'bold' : 'normal' " >MyButton</button>
  <br/><br/>
  <button style='color:red'[style.font-size.px]="fontSize" >MyButton1</button>
  <br/><br/>
  <button style='color:red'[ngStyle]="addStyle()" >MyButton2</button>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBold : boolean = true;
  fontSize : number = 30;
  addStyle(){
    let styles = {
      'font-size.px' : this.fontSize,
      'font-weight' : this.isBold ? 'bold' : 'normal'
    }
    return styles;
  }

}
