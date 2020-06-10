import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map, flatMap, filter } from 'rxjs/operators';

import { ApiService } from './api.service';

const localUser = () => JSON.parse(localStorage.getItem('currentUser') || 'null');

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  // internal use only - user, as a behaviorSubject to be able to get currentUser
  private user$ = new BehaviorSubject<any>(localUser());

  // user data available publicly
  public user = this.user$.asObservable().pipe(
    filter(d => d !== null),
    flatMap(() => this.fetch('/users/me')),
    map(u => ({
      ...u,
      isAdmin: u.roles.indexOf('admin') > -1,
    })));

  /**
   * Authenticate user
   * @param username Username for user to authenticate
   * @param password Password for user to authenticate
   */
  public login(username: string, password: string): Observable<any> {
    return this.post('/users/authenticate', { username, password })
      .pipe(map(user => {
          // login successful
          if (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.user$.next(user);
          }

          return user;
      }));
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.user$.next(null);
  }

  public get currentUser() {
    return this.user$.getValue();
  }
}
