import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { MatDialog, MatDialogRef } from '@angular/material/dialog';
 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// import { MaterialModule } from './material/material.module';
 
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

import { MatAlertComponent } from '../ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from '../ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from '../ng-material/mat-input-prompt/mat-input-prompt.component';




@Component({
  selector: 'mat-date-picker',
  templateUrl: './mat-date-picker.component.html',
  styleUrls: ['./mat-date-picker.component.scss'],
})
export class MatDatePickerComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}
