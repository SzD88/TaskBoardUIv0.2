import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DayDetailComponent } from '../day-detail/day-detail.component';
import { Task } from "../entities/Task";


@Component({
  selector: 'app-subtask-view',
  templateUrl: './subtask-view.component.html',
  styleUrls: ['./subtask-view.component.css']
})
export class SubtaskViewComponent {
  name = new FormControl('');

  dayImported? = this.detailComponent.day!.id.toString()

  tasks?: Task[] = [];

  task?: string;
  taskId?: number;

 // mainTasks: [] as Task[];

  constructor(private detailComponent: DayDetailComponent) {

    this.tasks = detailComponent.day?.mainTasks;
    this.task = this.tasks![1].content;
    this.taskId = this.tasks![1].id;

  }

  


  updateName() {
    this.name.setValue(this.tasks![0].content.toString() );
    
  }

}
