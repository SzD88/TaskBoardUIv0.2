import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from '../entities/Project';
import { Injectable, NgModule } from '@angular/core';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MessageService } from './message.service';
import { Router, Routes } from '@angular/router';
///
 
export class AppModule {

}
////
const projectsURL = 'https://localhost:7227/api/Projects';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {
  items: Project[] = [];

  refresh$ = new BehaviorSubject<boolean>(true);

  //get deleteOperationSuccessfulEvent$(): Observable<boolean> {
  //  return this._deleteOperationSuccessfulEvent$.asObservable();
  //}

    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      private router: Router
    ) { }

 
  // was getData
  getAllProjects() {

    return this.http.get(projectsURL);

  }
  refresh() { 
    return this.http.get(projectsURL); 
  }

  updateProject(enter: JSON): Observable<JSON> { 
    console.log(enter); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization: 'my-auth-token'
      })
    };
    const url = projectsURL;  
    const req = this.http.put<JSON>(url, enter, httpOptions);
    // 0 requests made - .subscribe() not called.
    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made. 
    return req;
  }
   
    addProject(enter: JSON): Observable<JSON> { 
        console.log(enter); 
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
              //  Authorization: 'my-auth-token'
            })
        }; 
        const url = projectsURL; 
        const req = this.http.post<JSON>(url, enter, httpOptions);
        // 0 requests made - .subscribe() not called.
        req.subscribe();
        // 1 request made.
        req.subscribe();
        // 2 requests made. 
        return req;
  }

  deleteProject(id: number) : void  {
    const deleteUrl = `${projectsURL}?id=${id}`;

    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
   
    this.http.delete(deleteUrl, httpOptions)

      .pipe()
      .subscribe(

        data => {
          console.log(data);
        });
   

      ; // subscribe was solution - again

    console.log(id + " deleted");
     
  }

  testDelete(id: number): Observable<JSON> {
    const deleteUrl = `${projectsURL}?id=${id}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const req = this.http.delete<JSON>(deleteUrl, httpOptions);

    //.pipe()
    //.subscribe(

    //  data => {
    //    console.log(data);
    //  });


    ; // subscribe was solution - again

    console.log(id + " deleted");

    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made. 
    return req;
  }

  testGetMethod() { 
    var cos = this.http.get<{
      options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body' | 'events' | 'response'
        params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
        reportProgress?: boolean,
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
        withCredentials?: boolean,
      },
      id: string,
    }[]>(projectsURL);

    return cos;
  }
}
