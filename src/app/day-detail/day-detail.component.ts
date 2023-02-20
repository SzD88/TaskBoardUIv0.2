import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Day } from '../entities/Day';
import { DaysComponent } from '../days/days.component';
import { DaysService } from '../services/days.service';



@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})



export class DayDetailComponent
{

  changedProject?: Day;

  @Input() day?: Day; // to jest powiazane z selected project

  constructor(private daysService: DaysService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: DaysComponent,

  ) { }

  ngOnInit() {
   
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
  getCurrentDay(id: number) {
   return this.daysService.getDayById(this.day!.id).subscribe(() => {
    })
  }
  deleteCurrentDay(id: number) {  
    this.daysService.testDelete(id).subscribe(() => { 
    }) 
  }  
}
