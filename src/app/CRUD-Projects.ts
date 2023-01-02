import { Project } from './Project';
import { Task } from './Task';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class AppModule { }


@Injectable({
  providedIn: 'root'
})

export class CRUDProjects {

  items: Project[] = [];


  constructor(
    private http: HttpClient
  ) { }

  getData() {

    return this.http.get('https://localhost:7227/api/Projects');

  }


  getProjects() {

    return this.http.get<{
      options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body' | 'events' | 'response'
        params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
        reportProgress?: boolean,
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
        withCredentials?: boolean,
      },
      id: string,
    }[]>('https://localhost:7227/api/Projects');


  }
}

