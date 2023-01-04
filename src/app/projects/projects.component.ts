import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/Project';
import { ProjectService } from '../services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  myData: any;
  selectedProject?: Project;

  constructor(private projectService: ProjectService) { }


  ngOnInit(): void { 
    this.projectService.getAllProjects().subscribe((data) => {
      this.myData = data; 
    });
     
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
  } 
}


