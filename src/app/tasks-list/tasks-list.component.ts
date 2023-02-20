import { Component, OnInit } from '@angular/core';
import { Day } from '../entities/Day';
import { DaysComponent } from '../days/days.component';
import { DaysService } from '../services/days.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  tasksOfDay: any;
  selectedProject?: Day;

  constructor(private projectService: DaysService, private messageService: MessageService) { }


  ngOnInit(): void {
    //this.projectService.get().subscribe((data) => {
    //  this.myData = data;

    /* });*/

  }


}
