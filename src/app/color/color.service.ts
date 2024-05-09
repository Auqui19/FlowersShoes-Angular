import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { color } from './color';
  
@Injectable({
  providedIn: 'root'
})
export class ColorService{

  
    private apiURL = "http://localhost:8092/color/";
    
 
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
     
 
    constructor(private httpClient: HttpClient) { }
      
    /**
     * Write code on Method
     *
     * @return response()
     */
    getAll(): Observable<any> {
      return this.httpClient.get(this.apiURL + 'listado')
      .pipe(
        catchError(this.errorHandler)
      )
    }



      
    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
   
}