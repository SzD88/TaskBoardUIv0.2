import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../entities/Day';
import { DaysService } from '../services/days.service';
import { MessageService } from '../services/message.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})

export class DaysComponent implements OnInit {
  @Input() inputDate: any;
  myData: any;
  currentWeek: any;
  week1: any;
  week2: any;
  week3: any;
  selectedDay?: Day;

  dateToCheck: Date;
  currentDate = new Date()  ;
   
  constructor(private daysService: DaysService, private messageService: MessageService, public datepipe: DatePipe) {

    this.dateToCheck = new Date;
     
  }

  
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
     
    //console.log( typeof ( this.dateToCheck  )  );
    //console.log( typeof ( this.currentDate.getUTCDate() ));
    //console.log( this.dateToCheck );
    //console.log(this.currentDate);

    let date1 = this.datepipe.transform(this.dateToCheck, 'yyyy-MM-dd');
    let date2 = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');
  //  console.log(date1);
   // console.log(date2);
     if ( date1 ===  date2) {
      return "gray"; 
     }
     return "white";
  }

  onSelect(day: Day): void {
    this.selectedDay = day;
    this.messageService.add(`ProjectsService: Selected project number`);
  }
}


