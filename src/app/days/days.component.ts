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
  selectedDay?: Day;

  constructor(private projectService: DaysService, private messageService: MessageService) { }


  ngOnInit(): void { 
    this.projectService.getAllDays().subscribe((data) => {
      this.myData = data;

    });
     
  }
  onSelect(day: Day): void {
    this.selectedDay = day;
    this.messageService.add(`ProjectsService: Selected project number`);
  } 
}


