import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DayCreateComponent } from './day-create/day-create.component';
import { DaysListComponent } from './days-list/days-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DayDetailComponent,
    MessagesComponent,
    DayCreateComponent,
    DaysListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DayDetailComponent },
      { path: 'create', component: DayCreateComponent },
    
    ])

  ],
  providers: [ProjectsComponent,  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
