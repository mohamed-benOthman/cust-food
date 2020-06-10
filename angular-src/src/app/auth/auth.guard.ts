import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.auth.currentUser;

        if (!currentUser) {
          // not logged in so redirect to login page with the return url
          this.redirect(state);
          return false;
        }

        // get required user roles from the active route
        const expectedRole = route.data.roles || [];
        const userRoles = currentUser.roles;

        // check if there are expected roles & if user has them
        if (expectedRole.length && !expectedRole.find((role: string) => userRoles.indexOf(role) > -1)) {
          this.redirect(state);
          return false;
        }

        // authorised so return true
        return true;
    }

    /**
     * Redirect to url
     */
    redirect({ url } = {} as RouterStateSnapshot) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: url }});
    }
}
