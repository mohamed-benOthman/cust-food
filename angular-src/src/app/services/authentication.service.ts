import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private localHost = 'api/user/';
  constructor(private http: HttpClient) {}
  public register(user: User) {
    return this.http.post(this.localHost, user);
  }
  public login(user: any) {
    return this.http.post(this.localHost + 'login', user);
  }
  public getData(id: any) {
    return this.http.get(this.localHost + id);
  }
  public sendResetEmail(email: string) {
    return this.http.post(this.localHost + 'sendEmail', {
      email: email,
    });
  }
  public resetPassword(password: string, token: any) {
    return this.http.post(this.localHost + 'resetPassword', {
      password: password,
      token: token,
    });
  }
  public checkToken(token: any) {
    return this.http.post(this.localHost + 'checkToken', {
      token: token,
    });
  }
  public addLastReasearch(ch: string, userId: any) {
    return this.http.post(this.localHost + 'addToSearchList/' + userId, {
      ingredients: ch,
    });
  }
  public createConfirmToken(email: string) {
    return this.http.post(this.localHost + 'confirmtoken', {
      email: email,
    });
  }
  public checkConfimationToken(token: any) {
    return this.http.post(this.localHost + 'checkConfimationToken', {
      token: token,
    });
  }
  public confirmUser(token: any) {
    return this.http.post(this.localHost + 'confirmUser', {
      token: token,
    });
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 401) {
        errorMessage = `Password or Email incorrect `;
      } else {
        errorMessage = 'Internal error ';
      }
    }

    return throwError(errorMessage);
  }
  handleError3() {
    return throwError('Internal Error');
  }
}
