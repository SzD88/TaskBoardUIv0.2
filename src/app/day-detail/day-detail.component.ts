import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from '../AppSettings';
import { DaysComponent } from '../days/days.component';
import { CreateTask } from '../entities/CreateTask';
import { Day } from '../entities/Day';
import { Task } from '../entities/Task';
import { DaysService } from '../services/days.service';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
}) 
export class DayDetailComponent implements OnInit
{
  inputs = [1];

  name: string = '';

  changedDay?: Day;

  @Input() day?: Day; 

  constructor(private daysService: DaysService,
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private daysComponent: DaysComponent,

  ) {
      
  }
  //SET DAY
  setDay(dayEnter: Day ) {

    this.day = dayEnter;

    console.log(this.day);

    console.log("totototo22");
  }

  //DELETE METHOD
  async deleteTask(day: Day, id: number) {
      console.log("delete inside");
     this.tasksService.deleteTask(id).subscribe(() => {
    }) 
     await this.delay(500);
    this.refresh(); 
  }
  //REFRESH
  refresh() {
    window.location.href = AppSettings.frontEndPoints;
  }
  //DELAY
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  //GETVALUE
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  //UPDATE SUBTASK
  async onEnter(contentToUpdate: string, id: number, date: Date, completed: boolean) {
 

    const tsk: Task = {
      id: id,
      content: contentToUpdate,
      completed: completed,
      dayDate: date,

      levelAboveId: this.day!.id
    };

    var jsn = JSON.stringify(tsk)
    this.tasksService.updateTask(JSON.parse(jsn));

    await this.delay(500);
    this.refresh();

  }

  ngOnInit() {
  }
  //CREATE SUBTASK
  async onEnterCreate(content: string, date: Date) {
    console.log("enter pressed");
   

    const newTask: CreateTask = {
       
      content: content,
      dayDate: date,
      levelAboveId: this.day!.id 
    };

    var jsn = JSON.stringify(newTask)

    console.log(jsn);
    this.tasksService.addTask(JSON.parse(jsn));


    await this.delay(500);
    this.refresh();
  }

  setValue(enter:string) {
     this.name = enter;
  }

  addInput() {

    this.ngOnInit();
  }
  
  overrideDay(id: string, projectNumber: string, title: string, description: string, completed: boolean) {
  }
 
   
  async onChangesSubmited(project: Day) {
    var jsn = JSON.stringify(this.day);
    this.daysService.updateDay(JSON.parse(jsn));
    await this.delay(500);
    this.refresh();
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
