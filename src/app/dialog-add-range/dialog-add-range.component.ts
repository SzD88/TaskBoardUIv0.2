import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppSettings } from '../AppSettings';
import { DayDetailComponent } from '../day-detail/day-detail.component';
import { CreateTaskRange } from '../entities/CreateTaskRange';
import { MatAlertComponent } from '../ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from '../ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from '../ng-material/mat-input-prompt/mat-input-prompt.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-dialog-add-range',
  templateUrl: './dialog-add-range.component.html',
  styleUrls: ['./dialog-add-range.component.css']
})
export class DialogAddRangeComponent {
  title = 'Tablica zadań';
  frontEndPoints = AppSettings.frontEndPoints;
  intranet = AppSettings.intranet;

  dataFromDialog: any;
  roomsFilter: any;

  dateFrom: string = '';
  dateTo: string = '';
  inputText: string = '';


  constructor(private dialog: MatDialog, private tasksService: TasksService,
    private dayDetailComponent: DayDetailComponent) { }

  alertDialog() {
    const dialogRef = this.dialog.open(MatAlertComponent, {
      data: {
        message: 'Hello World from test',
      },
    });
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
      alert(data);
    }
    );
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  async postRange(from: any, to: any, content:string): Promise<void> {

    var eventStartTime = new Date(from);

    eventStartTime.setDate(eventStartTime.getDate() + 1);

    var eventEndTime = new Date(to);
    var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
    var daysAhead = (duration / 3600000) / 24;

    for (var i = 0; i < daysAhead + 2; i++) {

      const newTask: CreateTaskRange = {

        content: content,
        dayDate: eventStartTime,
      };
      var jsn = JSON.stringify(newTask)
      console.log("before fetch" +  jsn);

      console.log(jsn);
      this.tasksService.addTask(JSON.parse(jsn));

      eventStartTime.setDate(eventStartTime.getDate() + 1);
    }
    await this.dayDetailComponent.delay(500);
     this.dayDetailComponent.refresh();
  }

  public onDateChanged(event: any) {

  } 
}
