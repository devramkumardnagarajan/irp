import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') }),
};

@Injectable({ providedIn: 'root' })
export class Service {

  /*private baseUrl = 'http://localhost:53401/api/';*/
  private baseUrl = 'http://localhost:8000/api/';

  constructor( private http: HttpClient) {
  }

  /** POST: add a new hero to the server */
  login (module: string, data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + module, data).pipe(
    );
  }
  /** POST: add a new hero to the server */
  register (module: string, data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + module, data).pipe(
      tap((model: any) => this.log(`added $module w/ id=${model.id}`)),
      catchError(this.handleError<any>('add' + module)),
    );
  }
  /** GET heroes from the server */
  getAll(module: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + module) .pipe(
        tap(any => this.log('fetched:' + module)),
        catchError(this.handleError(module, [])),
      );
  }
  /** GET heroes from the server */
  get(module: string, entity: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + module + '/' + entity) .pipe(
      tap(any => this.log('fetched:' + module)),
      catchError(this.handleError(module, [])),
    );
  }
  /** POST: add a new hero to the server */
  add (module: string, data: any): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('token', localStorage.getItem('token')),
    };
    return this.http.post<any>(this.baseUrl + module, data, options).pipe(
      tap((model: any) => this.log(`added $module w/ id=${model.id}`)),
      catchError(this.handleError<any>('add' + module)),
    );
  }
  /** PUT: update the already created entity to the server */
  update (module: string, entity: any, data: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + module + '/' + entity , data, httpOptions).pipe(
      tap((model: any) => this.log(`updated $module w/ id=${entity}`)),
      catchError(this.handleError<any>('update' + module)),
    );
  }
  /** DELETE: delete a entity from the server */
  delete (module: string, entity: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl + module + '/' + entity , httpOptions).pipe(
      tap((model: any) => this.log(`delte $module w/ id=${entity}`)),
      catchError(this.handleError<any>('update' + module)),
    );
  }

  log(message: string) {
    console.error(message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
