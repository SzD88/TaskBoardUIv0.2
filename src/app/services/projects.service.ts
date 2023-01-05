import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from '../entities/Project';
import { Injectable, NgModule } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MessageService } from './message.service';
///
 
export class AppModule { }
////
const projectsURL = 'https://localhost:7227/api/Projects';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    items: Project[] = [];

    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }

 
  // was getData
  getAllProjects() {

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

  deleteProject(id: number) {
    const deleteUrl = `${projectsURL}?id=${id}`;
    console.log(deleteUrl + " url to delete");
   //  https://localhost:7227/api/Projects?id=e9246e04-1505-4d1b-8651-3fe383d6ddcb'
    console.log(  "example :  https://localhost:7227/api/Projects?id=e9246e04-1505-4d1b-8651-3fe383d6ddcb");
    //https://localhost:7227/api/Projects?id=0cbb346c-2bc6-4f5c-926c-78756c32f77f
    console.log(id + " deleted");
    this.http .delete(deleteUrl);
    //const options = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //  }),
    //  body: {
    //    id: id,
    //  },
    //};

    //this.http
    //  .delete(projectsURL, options)
    //  .subscribe((s) => {
    //    console.log(s);
    //  });
   
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
