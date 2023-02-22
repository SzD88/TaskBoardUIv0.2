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
// import { SubtaskViewComponent } from './subtask-view/subtask-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DayDetailComponent,
    MessagesComponent,
    TasksListComponent,
   // SubtaskViewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
     // { path: 'create', component: DayCreateComponent },
    
    ])

  ],
  providers: [DaysComponent,  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
