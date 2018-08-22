import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button class='colorClass' [class]='classToApply'>MyButton</button>
              <br/><br/>
              <button class='colorClass' [class.boldClass]='applyBoldClass'>MyButton1</button>
              <br/><br/>
              <button class='colorClass' [class.classToApply]='applyBoldClass'>MyButton2</button>
              <br/><br/>
              <button class='boldClass italicsClass colorClass' [class.boldClass]='!applyBoldClass'>MyButton2</button>
              <br/><br/>
              <button class='boldClass italicsClass colorClass' [class.boldClass]='applyBoldClass'>MyButton3</button>
              <br/><br/>
              <button class='colorClass' [ngClass]='addClasses()'>MyButton4</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
classToApply:string = 'boldClass italicsClass';
applyBoldClass :boolean = true;
applyItalicClass : boolean = true;

addClasses(){
  let classes = {
    boldClass : this.applyBoldClass,
    italicsClass : this.applyItalicClass
  };
  return classes;
}
}
