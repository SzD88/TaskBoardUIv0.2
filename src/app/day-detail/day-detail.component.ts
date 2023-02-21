import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Day } from '../entities/Day';
import { DaysComponent } from '../days/days.component';
import { DaysService } from '../services/days.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
}) 
export class DayDetailComponent implements OnInit
{
  inputs = [1];

  changedDay?: Day;

  @Input() day?: Day; // to jest powiazane z selected project

  constructor(private daysService: DaysService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: DaysComponent,

  ) {
    
  }

  ngOnInit() {

     

  }

  addInput() {
    console.log("test add input");

    this.ngOnInit();
    // this.inputs.push(1);
  }

  overrideDay(id: string, projectNumber: string, title: string, description: string, completed: boolean) {
  }

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
