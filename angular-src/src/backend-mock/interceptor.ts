import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { users } from './auth/users';
import * as data from './data';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        // find if any user matches login credentials
        const filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            ...user,
            password: undefined,
          };

          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'Wrong password or user name' } });
        }
      }

      // get user
      if (request.url.match(/\/users\/me$/i) && request.method === 'GET') {
        const userId = parseInt(request.headers.get('Authorization') || '', 10);
        const user = users.find(u => u.id === userId);

        const body = {
          ...user,
          password: undefined,
        };

        return of(new HttpResponse({ status: 200, body }));
      }

      // get regions & areas
      if (request.url.endsWith('/regions') && request.method === 'GET') {
        const body = {
          regions: data.regions,
          areas: data.areas,
        };

        return of(new HttpResponse({ status: 200, body }));
      }

      // pass through any requests not handled above
      return next.handle(request);
    }))

    // call materialize and dematerialize to ensure delay even if an error is
    // thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};
