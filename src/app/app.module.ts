import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule , } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//dialogWindow
import { NgMaterialModule } from './ng-material/ng-material.module';
//import { MatDatePickerComponent } from './ng-material/mat-date-picker/mat-date-picker.component';

import { FormGroup, FormControl } from '@angular/forms';
// import { MaterialExampleModule } from '../material.module';
// import { MatDatePickerComponent } from './ng-material/mat-date-picker';
// import { MatNativeDateModule } from '@angular/material/core';

 import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DialogAddRangeComponent } from './dialog-add-range/dialog-add-range.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DayDetailComponent,
    MessagesComponent,
    TasksListComponent,
    NavbarComponent,
    DialogAddRangeComponent,

  //  MatDatePickerComponent,

  ],
  imports: [
    BrowserModule, NgMaterialModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, //  MatDatepickerModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
      // { path: 'create', component: DayCreateComponent },

    ]),
    BrowserAnimationsModule

  ],
  providers: [DaysComponent, DayDetailComponent,  DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
  ],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
