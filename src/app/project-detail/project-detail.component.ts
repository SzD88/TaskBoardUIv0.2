import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Project } from '../entities/Project';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectService } from '../services/projects.service';



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})



export class ProjectDetailComponent
{

  changedProject?: Project;

  @Input() project?: Project; // to jest powiazane z selected project

  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: ProjectsComponent,

  ) { }

  ngOnInit() {

  }

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

  deleteCurrentProject(id: number) {  
    this.projectService.testDelete(id).subscribe(() => { 
    }) 
  }  
}
