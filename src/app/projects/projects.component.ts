import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { Task } from '../Task';
// import { PROJECTS } from '../mock-Projects';
import { CRUDProjects } from '../CRUD-Projects';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  pobraneObiekty!: Observable<{ id: string }[]>;

  //pobraneObiekty!: Observable<{
  //  id: string,
  //  projectNumber: string,
  //  title: string,
  //  description: string,
  //  completed: boolean,


  //}[]>;

  
  ngOnInit(): void {
  //   this.pobraneObiekty = this.projects.getProjects();
        this.pobraneObiekty = this.cartService.getSomethingElse();

  }
   
  selectedProject?: Project;


  onSelect(project: Project): void {
    this.selectedProject = project;
  }

}
