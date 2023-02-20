import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateDay } from '../entities/CreateDay';
import { DaysComponent } from '../days/days.component';
import { DaysService } from '../services/days.service';


@Component({
  selector: 'app-day-create',
  templateUrl: './day-create.component.html',
  styleUrls: ['./day-create.component.css']
})

  
export class DayCreateComponent {

  constructor(private projectService: DaysService,
    private router: Router,
    private route: ActivatedRoute,
    private projects: DaysComponent,

  ) { }
 
  newProject: CreateDay = new CreateDay();
   
  createProject1(pn: string, tt: string, ds: string) { 
    console.log(tt);
    this.newProject.projectNumber = pn;
    this.newProject.title  = tt;
    this.newProject.description = ds;

    console.log(this.newProject);

    var jsn = JSON.stringify(this.newProject);
    this.projectService.addDay(JSON.parse(jsn));
  }
    
}

function ngOnInit() {
    throw new Error('Function not implemented.');
}
 
