import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../entities/Project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {


  @Input() project?: Project; // to jest powiazane z selected project

}
