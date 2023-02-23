import { Component, OnInit } from '@angular/core';
import { Day } from '../entities/Day';
import { DaysService } from '../services/days.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})

export class DaysComponent implements OnInit {

  myData: any;
  currentWeek: any;
  week1: any;
  week2: any;
  week3: any;
  selectedDay?: Day;

  dateToCheck: any;
  currentDate = new Date().getUTCDate() ;

 



  constructor(private daysService: DaysService, private messageService: MessageService) { }

 

  ngOnInit(): void {
     

    this.daysService.getAllDays().subscribe((data) => {
      this.myData = data;
    });

    this.daysService.getWeekly(0).subscribe((data) => {
      this.currentWeek = data;
    });
    this.daysService.getWeekly(1).subscribe((data) => {
      this.week1 = data;
    });
    this.daysService.getWeekly(2).subscribe((data) => {
      this.week2 = data;
    });
    this.daysService.getWeekly(3).subscribe((data) => {
      this.week3 = data;
    });

  }
  setDate(enter: Date) {
    this.dateToCheck = enter;

  }
  getColor() {
     
    console.log(this.dateToCheck );
    console.log(this.currentDate );
    if (this.dateToCheck === this.currentDate) {
      return "red"; 
    }
    return "white";
  }

  onSelect(day: Day): void {
    this.selectedDay = day;
    this.messageService.add(`ProjectsService: Selected project number`);
  }
}


