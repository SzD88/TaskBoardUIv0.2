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


@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    items: Project[] = [];

    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }

 

  getData() {


    this.messageService.add('ProjectsService: fetched projects');
    return this.http.get('https://localhost:7227/api/Projects');

  }
 

    getSomethingElse() {
  
        var cos =  this.http.get<{
            options: {
                headers?: HttpHeaders | { [header: string ]: string | string[] },
                observe?: 'body' | 'events' | 'response' 
                params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
                reportProgress?: boolean,
                responseType?: 'arraybuffer' | 'blob' | 'json' | 'text', 
                withCredentials?: boolean,
            },
            id: string,
        }[]>('https://localhost:7227/api/Projects');

      return cos;
    }
    
    addProject(enter: JSON): Observable<JSON> {

       
        console.log(enter);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
              //  Authorization: 'my-auth-token'
            })
        }; 
        const url = 'https://localhost:7227/api/Projects';
         
        // w tej formie to dopiero dzialalo 

        const req = this.http.post<JSON>(url, enter, httpOptions);
        // 0 requests made - .subscribe() not called.
        req.subscribe();
        // 1 request made.
        req.subscribe();
        // 2 requests made.

        return req;
    }
    
}
