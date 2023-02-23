import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Day } from '../entities/Day';
import { DaysComponent } from '../days/days.component';
import { DaysService } from '../services/days.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { Task } from '../entities/Task';
import { CreateTask } from '../entities/CreateTask';


@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
}) 
export class DayDetailComponent implements OnInit
{
  inputs = [1];
 // name = new FormControl('');
  name: string = '';

  changedDay?: Day;

  @Input() day?: Day; // to jest powiazane z selected project

  constructor(private daysService: DaysService,
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: DaysComponent,

  ) {
      
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  ngOnInit() { 
  }
  onEnter(contentToUpdate:string, id: number) {
    console.log("enter pressed");
    console.log(contentToUpdate);
    console.log(id);

    const tsk: Task = {
      id: id,
      content: contentToUpdate,
      completed: false,
      levelAboveId: this.day!.id 
    };
    
    var jsn = JSON.stringify(tsk)
    this.tasksService.updateTask(JSON.parse(jsn));

  }
  onEnterCreate(content: string) {
    console.log("enter pressed");
   

    const newTask: CreateTask = {
       
      content: content,
      levelAboveId: this.day!.id
    };

    var jsn = JSON.stringify(newTask)

    console.log(jsn);
    this.tasksService.addTask(JSON.parse(jsn));

  }
  
  setValue(enter:string) {
     this.name = enter;
  }

  addInput() {
    console.log("test add input");

    this.ngOnInit();
    // this.inputs.push(1);
  }

  overrideDay(id: string, projectNumber: string, title: string, description: string, completed: boolean) {
  }

  connectionMethod(id: number) {


    console.log(id);}




  onChangesSubmited(project: Day): void {
    var jsn = JSON.stringify(this.day);
    this.daysService.updateDay(JSON.parse(jsn));
  }
  
  addNewAsCurrent(project: Day): void {
    var jsn = JSON.stringify(this.day);
    this.daysService.addDay(JSON.parse(jsn));
  }
  getCurrentDay( ) {

    console.log("from method");
    console.log(this.day);

    
  }
  deleteCurrentDay(id: number) {  
    this.daysService.testDelete(id).subscribe(() => { 
    }) 
  }
 

   

 

 
}
