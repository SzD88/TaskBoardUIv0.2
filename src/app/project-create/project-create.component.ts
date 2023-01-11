import { Component, Input } from '@angular/core';
import { Project } from '../entities/Project';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectService } from '../services/projects.service';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})

 


export class ProjectCreateComponent {

  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: ProjectsComponent,

  ) { }


  newProject!: Project;


  createProject(projectNumber: string, title: string, description: string ) {
     
    this.newProject.projectNumber = projectNumber;
    this.newProject.title  = title;
    this.newProject.description = description;
     
    this.projectService.postProject(this.newProject);
  }
   
}

function ngOnInit() {
    throw new Error('Function not implemented.');
}
 
