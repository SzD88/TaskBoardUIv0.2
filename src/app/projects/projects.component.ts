import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/Project';
import { DaysService } from '../services/days.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  myData: any;
  selectedProject?: Project;

  constructor(private projectService: DaysService, private messageService: MessageService) { }


  ngOnInit(): void { 
    this.projectService.getAllProjects().subscribe((data) => {
      this.myData = data;

    });
     
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
    this.messageService.add(`ProjectsService: Selected project number=${project.projectNumber}`);
  } 
}


