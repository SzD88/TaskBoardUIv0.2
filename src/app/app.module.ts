import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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

 
@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DayDetailComponent,
    MessagesComponent,
    TasksListComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule, NgMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
      // { path: 'create', component: DayCreateComponent },

    ]),
    BrowserAnimationsModule

  ],
  providers: [DaysComponent, DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
