import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Investing watchlist';
  motto:string;

  constructor() {
    this.currentMotto('It is a good time to invest');
  }

  currentMotto(motto:string):void {
    this.motto = motto;
    console.log(motto);
  }
}
