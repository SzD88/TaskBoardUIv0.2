import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProject } from '../entities/CreateProject';
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
 
  newProject: CreateProject = new CreateProject();
   
  createProject1(pn: string, tt: string, ds: string) { 
    console.log(tt);
    this.newProject.projectNumber = pn;
    this.newProject.title  = tt;
    this.newProject.description = ds;

    console.log(this.newProject);

    var jsn = JSON.stringify(this.newProject);
    this.projectService.addProject(JSON.parse(jsn));
  }
    
}

function ngOnInit() {
    throw new Error('Function not implemented.');
}
 
