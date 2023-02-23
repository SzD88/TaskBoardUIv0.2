import { Component } from '@angular/core';
import { AppSettings } from './AppSettings';

const url = AppSettings.frontEndPoints;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tablica zadań';

}
