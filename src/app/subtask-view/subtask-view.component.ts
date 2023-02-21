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

     tasks : Task[] =  [];

  constructor(private detailComponent: DayDetailComponent) {

    this.tasks = detailComponent.day?.mainTasks;

  }

  


  updateName() {
    this.name.setValue(this.detailComponent.day!.id.toString());
    
  }

}
