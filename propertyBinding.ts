import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <img [src] = 'imagePath'/>
              <!-- <img [src] = 'assets/{{imagePathNext}}'/> -->
              <button [disabled]='isDisabled'>Click Me</button>
              <!--<span innerHtml='headerDetails'></span> -->
              <button bind-disabled='isDisabled'>Click Login</button>
              <!--<div>{{badHtml}}</div> -->
              <div [innerHtml]='badHtml'></div>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagePath : string = 'assets/panda.jpg';
  imagePathNext :string ='panda.jpg';
  isDisabled : boolean =true;
  headerDetails :string = 'Bescent Technology';
  badHtml : string ='Hello <script> alert("Hacked");</script>World';

}
