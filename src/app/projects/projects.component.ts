import { Component, OnInit } from '@angular/core';
import { Day } from '../entities/Day';
import { DaysService } from '../services/days.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  myData: any;
  selectedProject?: Day;

  constructor(private projectService: DaysService, private messageService: MessageService) { }


  ngOnInit(): void { 
    this.projectService.getAllDays().subscribe((data) => {
      this.myData = data;
      console.log("test");
      console.log(this.myData);
    });
     
  }
  onSelect(project: Day): void {
    this.selectedProject = project;
    this.messageService.add(`ProjectsService: Selected project number=${project.projectNumber}`);
  } 
}


