import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public buttonsTexts:Array<string> = ['First button'];

  public addButton(index:number):void {
    this.buttonsTexts = [...this.buttonsTexts, `button ${index}`];
  }
}
  
