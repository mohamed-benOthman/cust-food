import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first, catchError, withLatestFrom, flatMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public authErrors = null;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavigationService,
  ) {}

  get returnUrl() {
    return this.route.snapshot.queryParams.returnUrl;
  }

  /**
   * Authenticate user
   * @param param0 Username & password
   */
  login([username, password] = [] as Array<string>) {
    this.auth.login(username, password)
      .pipe(first())

      .pipe(catchError(error => (this.authErrors = error.error, [])))
      .pipe(flatMap(() => this.nav.routes))
      .subscribe(this.redirectOnAuth.bind(this));
  }

  /**
   * On a successful auth event, redirect user either to homepage or returnUrl
   * ?: move the redirect based on user role (eg. on `Contacts` page for admin) to the dashboard page?
   * @param path Path to redirect
   */
  redirectOnAuth(routes?: any) {
    this.router.navigate([this.returnUrl || (routes && `/dashboard/${routes[0].path}`) || '/']);
  }
}
