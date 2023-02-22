import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Day } from '../entities/Day';
import { Injectable, NgModule } from '@angular/core';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MessageService } from './message.service';
import { Router, Routes } from '@angular/router';
import { Task } from '../entities/Task';
///
 
export class AppModule {

}
////
const tasksUrl = 'https://localhost:7227/api/subtasks';

const mainURL = 'http://localhost:4200/';


@Injectable({
    providedIn: 'root'
})
export class TasksService {
  items: Task[] = [];

  refresh$ = new BehaviorSubject<boolean>(true);
 
    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      private router: Router
    ) { }

 
  
  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>( tasksUrl, task ).pipe( 
    );
  }
 
 

  updateTask(enter: JSON): Observable<JSON> { 
    console.log("from task service:"); 
    console.log(enter); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization: 'my-auth-token'
      })
    };
    const url = tasksUrl;  
    const req = this.http.put<JSON>(url, enter, httpOptions);
    // 0 requests made - .subscribe() not called.
    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made.
    //console.log(req);
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
        const url = tasksUrl; 
        const req = this.http.post<JSON>(url, enter, httpOptions);
        // 0 requests made - .subscribe() not called.
        req.subscribe();
        // 1 request made.
      //  req.subscribe();
        // 2 requests made. 
        return req;
  }

  deleteProject(id: number): Observable<Day>  {
    const deleteUrl = `${tasksUrl}?id=${id}`;

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
    console.log(id + " deleted"); 
    return this.http.delete<Day>(deleteUrl, httpOptions).pipe(
    
    );
  }
  refresh() {
    window.location.href = mainURL;
  }

  testDelete(id: number): Observable<JSON> {
    const deleteUrl = `${tasksUrl}?id=${id}`; 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }; 
    const req = this.http.delete<JSON>(deleteUrl, httpOptions); 
    console.log(id + " deleted"); 
    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made. 
     this.refresh();
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
    }[]>(tasksUrl);

    return cos;
  }
}
