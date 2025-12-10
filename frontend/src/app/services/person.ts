import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../modules/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }
  add(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person).pipe(catchError(this.handleError));
  }

  update(id: number, person: Person): Observable<Person> {
    return this.http
      .put<Person>(`${this.baseUrl}/${id}`, person)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Client error: ${error.error.message}`;
    } else {
      errorMsg = `Server returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMsg);
    return throwError(() => new Error(errorMsg));
  }
}
