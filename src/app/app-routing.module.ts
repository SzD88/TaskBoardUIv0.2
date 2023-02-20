import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { DayCreateComponent } from './day-create/day-create.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'create', component: DayCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
