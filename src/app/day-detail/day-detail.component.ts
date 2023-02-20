import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Project } from '../entities/Project';
import { ProjectsComponent } from '../projects/projects.component';
import { DaysService } from '../services/days.service';



@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})



export class DayDetailComponent
{

  changedProject?: Project;

  @Input() project?: Project; // to jest powiazane z selected project

  constructor(private projectService: DaysService,
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
