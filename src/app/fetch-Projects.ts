import { Project } from './Project';
import { Task } from './Task';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


 
export const PROJECTS = Projects;

 
 


