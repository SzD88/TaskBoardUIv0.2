import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppSettings } from './AppSettings';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { DaysComponent } from './days/days.component';
import { Day } from './entities/Day';
import { MatAlertComponent } from './ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from './ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from './ng-material/mat-input-prompt/mat-input-prompt.component';
import { DaysService } from './services/days.service';


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
  toDisplay: any | null;
  selectedDay?: Day;
  testData: any; 
  dataFromDialog: any;

  constructor(private dialog: MatDialog, private daysComponent: DaysComponent, private daysService: DaysService, private datepipe: DatePipe, private dayDetailComponent: DayDetailComponent ) { }

  jumpToDay(date: string): void {

    let latest_date =  this.datepipe.transform(date, 'yyyy-MM-dd');

    this.daysService.getDayByDate(latest_date).subscribe((data) => {
      this.testData = data;

      this.daysComponent.onSelect(data);
   
      this.daysComponent.onSelect(this.testData);

   });

    this.daysComponent.onSelect(this.testData);
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
      this.dataFromDialog = data.form; 
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
