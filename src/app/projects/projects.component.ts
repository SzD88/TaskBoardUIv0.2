import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { Task } from '../Task';
// import { PROJECTS } from '../mock-Projects';
import { CRUDProjects } from '../CRUD-Projects';
import { concatWith, Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  myData: any;
  selectedProject?: Project;

  constructor(private cartService: CartService) { }


  ngOnInit(): void { 
    this.cartService.getData().subscribe((data) => {
      this.myData = data; 
    });
     
  }
  onSelect(proj: Project): void {
    this.selectedProject = proj;
  } 
}


// arr!: Observable<{ proj : Project    }[]>
//  https://www.youtube.com/watch?v=Vv6Tbk32N8o
/*pobraneObiekty!: Observable<{ id: string }[]>; // | undefined*/

//pobraneObiekty!: Observable<{
//  id: string,
//  projectNumber: string,
//  title: string,
//  description: string,
//  completed: boolean,


//}[]>;

//ngOnInit(): void {


//  //   this.pobraneObiekty = this.projects.getProjects();
//  this.pobraneObiekty = this.cartService.getSomethingElse();
//  console.log(this.pobraneObiekty);
//}

//selectedProject ?: Project;


//onSelect(project: Project): void {
//  this.selectedProject = project;
//}

//}
