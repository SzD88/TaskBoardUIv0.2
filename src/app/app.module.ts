import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { DaysComponent } from './days/days.component';
import { DialogAddRangeComponent } from './dialog-add-range/dialog-add-range.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DayDetailComponent,
    MessagesComponent,
    TasksListComponent,
    NavbarComponent,
    DialogAddRangeComponent,
  ],
  imports: [
    BrowserModule, NgMaterialModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
    ]),
    BrowserAnimationsModule

  ],
  providers: [DaysComponent, DayDetailComponent,  DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
  ],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
