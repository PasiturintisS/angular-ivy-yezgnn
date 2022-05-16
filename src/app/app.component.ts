import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  intArr: Array<number> = [1, 5, 9, 8, 7, , 15, 1, 4, 8, 415, 1, 51, 5, 51, 0];
  welcomeText: string = 'Labas Angularai :)';
}
