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
// import { SubtaskViewComponent } from './subtask-view/subtask-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FindComponent } from './find/find.component';
@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DayDetailComponent,
    MessagesComponent,
    TasksListComponent,
    FindComponent,
   // SubtaskViewComponent,
  ],
  imports: [
    BrowserModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
      { path: 'find', redirectTo: '/FindComponent', pathMatch: 'full'  },

       
     // { path: 'create', component: DayCreateComponent },
    
    ])

  ],
  providers: [DaysComponent,  DatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
