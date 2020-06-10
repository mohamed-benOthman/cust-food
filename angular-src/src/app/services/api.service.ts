import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
const { HOST_URL, BASE_PATH } = environment.api;

/**
 * This is an abstract api service
 * Extend this for defining a specific api service (see: regions.service)
 */

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return The Observable for the HTTP request.
   */
  fetch(path: string, options?: any): Observable<any> {
    return this.http.get<any>(`${HOST_URL}${BASE_PATH}${path}`, options)
      .pipe(catchError(this.handleError.bind(this)));
  }

  /**
   * Returns an Observable for the HTTP POST request for the JSON resource.
   * @return The Observable for the HTTP request.
   */
  post(path: string, options?: any): Observable<any> {
    return this.http.post<any>(`${HOST_URL}${BASE_PATH}${path}`, options)
      .pipe(catchError(this.handleError.bind(this)));
  }

  /**
   * Handle HTTP error
   */
   private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
