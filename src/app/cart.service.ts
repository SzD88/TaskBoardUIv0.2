import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from './Project';
import { Injectable, NgModule } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

///
 
export class AppModule { }
////


@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: Project[] = [];

    constructor(
        private http: HttpClient
    ) { }

    addToCart(product: Project) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }


    getShippingPrices() {
        return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
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

       console.log("to gowno:");
       console.log(cos.forEach);
      return cos;
    }
    
    //addProject(enter: JSON): Observable<JSON> {

       
    //    console.log(enter);

    //    const httpOptions = {
    //        headers: new HttpHeaders({
    //            'Content-Type': 'application/json',
    //          //  Authorization: 'my-auth-token'
    //        })
    //    }; 
    //    const url = 'https://localhost:7227/api/Projects';
         
    //    // w tej formie to dopiero dzialalo 

    //    const req = this.http.post<JSON>(url, enter, httpOptions);
    //    // 0 requests made - .subscribe() not called.
    //    req.subscribe();
    //    // 1 request made.
    //    req.subscribe();
    //    // 2 requests made.

    //    return req;
    //}
    
}
