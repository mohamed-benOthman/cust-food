import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';
const { navigationConfig } = environment;

/**
 * Filter all dynamic routes and get the routes available to current user based on user roles
 */

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private routes$: BehaviorSubject<any>;
  public routes: Observable<any>;

  constructor(auth: AuthService) {
    this.routes$ = new BehaviorSubject(null);
    this.routes = this.routes$.asObservable().pipe(filter(d => d !== null));

    auth.user.subscribe(this.updateRoutes.bind(this));
  }

  /**
   * Filter all dynamic routes and get the routes available to current user based on user roles
   * @param param0 Current User
   */
  updateRoutes({ roles: userRoles } = {} as any) {
    this.routes$.next(
      navigationConfig.filter(({ roles }) => (
        roles.some(role => userRoles.indexOf(role) > -1)
      )) as any
    );
  }
}
