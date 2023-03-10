import { Component } from '@angular/core';
import { AppSettings } from '../AppSettings';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Tablica zadań';
  frontEndPoints = AppSettings.frontEndPoints;
  intranet = AppSettings.intranet;
}
 

