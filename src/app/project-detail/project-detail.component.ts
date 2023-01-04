import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../entities/Project';
import { ProjectService } from '../services/projects.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {

  changedProject?: Project;
   
  @Input() project?: Project; // to jest powiazane z selected project

  constructor(private projectService: ProjectService) { }

  overrideProject(id: string, projectNumber: string, title: string, description: string, completed: boolean) { 
  }

  onChangesSubmited(project: Project): void {
    var jsn = JSON.stringify(this.project);
    this.projectService.updateProject(JSON.parse(jsn));
  }

  addNewAsCurrent(project: Project): void { 
    var jsn = JSON.stringify(this.project);  
    this.projectService.addProject(JSON.parse(jsn));
  }

  deleteCurrentProject(id: number): void {
    this.projectService.deleteProject(id);
  }
  //"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //"projectNumber": "string",
  //"title": "string",
  //"description": "string",
  //"completed": true
  //add(name: Project): void {
  //  name = name.trim();
  //  if (!name) { return; }
  //  this.heroService.addHero({ name } as Hero)
  //    .subscribe(hero => {
  //      this.heroes.push(hero);
  //    });
  //}
}
