import { Component } from '@angular/core';
import { AppSettings } from './AppSettings';
// import { MaterialModule } from './material/material.module';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAlertComponent } from './ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from './ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from './ng-material/mat-input-prompt/mat-input-prompt.component';

import { MatDatepickerModule } from '@angular/material/datepicker';


const url = AppSettings.frontEndPoints;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tablica zadań';
  frontEndPoints = AppSettings.frontEndPoints;
  intranet = AppSettings.intranet;

  dataFromDialog: any;

  constructor(private dialog: MatDialog) { }

  alertDialog() {
    const dialogRef = this.dialog.open(MatAlertComponent, {
      data: {
        message: 'Hello World from Edupala',
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

    //dialogRef.afterClosed().subscribe((data) => {
    //  this.dataFromDialog = data.form; //tutaj
    //  if (data.clicked === 'submit') {
    //    console.log('Sumbit button clicked');
    //  }
    //});
  }


}
