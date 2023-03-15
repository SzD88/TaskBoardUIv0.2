import { Component } from '@angular/core';
import { AppSettings } from './AppSettings';
// import { MaterialModule } from './material/material.module';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAlertComponent } from './ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from './ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from './ng-material/mat-input-prompt/mat-input-prompt.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, FormControl } from '@angular/forms';
 
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Day } from './entities/Day';
import { Task } from './entities/Task';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { DaysComponent } from './days/days.component';
import { empty } from 'rxjs';



const url = AppSettings.frontEndPoints;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [
  
     { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }]
})

export class AppComponent {
  title = 'Tablica zadań';
  frontEndPoints = AppSettings.frontEndPoints;
  intranet = AppSettings.intranet;

dateToJump: string = '';

  selectedDay?: Day;

  dataFromDialog: any;

  constructor(private dialog: MatDialog, private daysComponent: DaysComponent) { }

  alertDialog() {
    const dialogRef = this.dialog.open(MatAlertComponent, {
      data: {
        message: 'Hello World from Edupala',
      },
    });
  }

  jumpToDay(date: string): void { // day: Day

    //var dateType = new Date(date);
    //const dday: Day = {
    //  id: 123,
    //  dayDate: dateType,
    //  title: "x",
    //  description: "x",
    //  completed: false,
    //  mainTasks: Task[] = { }
    //}

    //var dt = new Date(date);


    //dayConverted.dayDate = dt;

    //console.log(dayConverted.dayDate);



    //this.daysComponent.onSelect(dayConverted);

   //  var cos = new Day();
    // this.selectedDay = ;
  }

  confirmDialog() {
    const ref: MatDialogRef<MatConfirmComponent> = this.dialog.open(
      MatConfirmComponent,
      {
        width: '600px',
        height: '210px',
        data: {
          message: 'Are you sure to cancel without saving the data?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );
  }

  showPrompt(): void {
    const dialogRef = this.dialog.open(MatInputPromptComponent, {
      width: '350px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form; //tutaj
      if (data.clicked === 'submit') {
        alert('Sumbit button clicked');
      }
    });
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
