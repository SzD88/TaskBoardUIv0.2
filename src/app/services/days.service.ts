import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Day } from '../entities/Day';
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
const daysUrl = 'https://localhost:7227/api/days';

const mainURL = 'http://localhost:4200/';


@Injectable({
    providedIn: 'root'
})
export class DaysService {
  items: Day[] = [];

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
  //getAllProjects() { 
  //  return this.http.get(projectsURL); 
  //}
  postDay(project: Day): Observable<Day> {
    return this.http.post<Day>( daysUrl, project ).pipe( 
    );
  }
  getAllDays(): Observable<Day[]> { 
    var projects = this.http.get<Day[]>(daysUrl);
    return projects; 
  }
  refresh() { 
    window.location.href = mainURL; 
  }

  getDayById(id: number): Observable<Day> {
    let urlWithId = daysUrl + "/" + id

    var day = this.http.get<Day>(urlWithId);
    return day;
  }
 

  updateDay(enter: JSON): Observable<JSON> { 
    console.log(enter); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization: 'my-auth-token'
      })
    };
    const url = daysUrl;  
    const req = this.http.put<JSON>(url, enter, httpOptions);
    // 0 requests made - .subscribe() not called.
    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made. 
    return req;
  }
   
    addDay(enter: JSON): Observable<JSON> { 
        console.log(enter); 
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
              //  Authorization: 'my-auth-token'
            })
        }; 
        const url = daysUrl; 
        const req = this.http.post<JSON>(url, enter, httpOptions);
        // 0 requests made - .subscribe() not called.
        req.subscribe();
        // 1 request made.
      //  req.subscribe();
        // 2 requests made. 
        return req;
  }

  deleteDay(id: number): Observable<Day>  {
    const deleteUrl = `${daysUrl}?id=${id}`;

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

  testDelete(id: number): Observable<JSON> {
    const deleteUrl = `${daysUrl}?id=${id}`; 
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
    }[]>(daysUrl);

    return cos;
  }
}
