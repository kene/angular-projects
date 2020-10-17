import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  // Base url
  baseurl = 'http://localhost:3000';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  // POST Request
  createBug(data): Observable<Bug> {
    return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandle)
    )
  } 


  // GET
  getIssueById(id): Observable<Bug>{
    return this.http.get<Bug>(this.baseurl + '/bugtracking/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  // GET
  getIssues(): Observable<Bug>{
    return this.http.get<Bug>(this.baseurl + '/bugtracking/')
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  // PUT
  updateBug(id, data): Observable<Bug>{
    return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  // DELETE
  deleteBug(id){
    return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }


  // Error handling
  errorHandle(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // Get client-side error
      errorMessage = error.error.message;
    }else{
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; 
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
