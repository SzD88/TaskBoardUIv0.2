import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppSettings } from '../AppSettings';
import { DialogAddRangeComponent } from '../dialog-add-range/dialog-add-range.component';
import { MatAlertComponent } from '../ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from '../ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from '../ng-material/mat-input-prompt/mat-input-prompt.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Tablica zadań';
  frontEndPoints = AppSettings.frontEndPoints;
  intranet = AppSettings.intranet;

  selectedDay?: Date;

  dataFromDialog: any;

  constructor(private dialog: MatDialog) { }
  // tutaj #wygaszono
  //alertDialog() {
  //  const dialogRef = this.dialog.open(MatAlertComponent, {
  //    data: {
  //      message: 'Hello World from Edupala',
  //    },
  //  });
  //}
  
  onSelect(): void {
    var day = new Date();
    this.selectedDay = day;
  }

  //confirmDialog() {
  //  const ref: MatDialogRef<MatConfirmComponent> = this.dialog.open(
  //    MatConfirmComponent,
  //    {
  //      width: '600px',
  //      height: '210px',
  //      data: {
  //        message: 'Are you sure to cancel without saving the data?',
  //      },
  //      backdropClass: 'confirmDialogComponent',
  //      hasBackdrop: true,
  //    }
  //  );
  //}
  addRange(): void {
    const dialogRef = this.dialog.open(DialogAddRangeComponent, {
      width: '350px',
      height: '290px',
   
    });

  }

  //showPrompt(): void {
  //  const dialogRef = this.dialog.open(MatInputPromptComponent, {
  //    width: '350px',
  //    height: '400px',
  //  });

  //  dialogRef.afterClosed().subscribe((data) => {
  //    this.dataFromDialog = data.form;
  //    if (data.clicked === 'submit') {
  //      console.log('Sumbit button clicked');
  //    }
  //  });
  //}
}
