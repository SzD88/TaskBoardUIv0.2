import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ProjectCreateComponent } from './project-create/project-create.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MessagesComponent,
    ProjectCreateComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectDetailComponent },
      { path: 'create', component: ProjectCreateComponent },
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
