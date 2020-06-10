import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    const authService = this.injector.get(AuthenticationService);

    const tokenizedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'bearer ' + localStorage.getItem('token')
      ),
    });
    return next.handle(tokenizedReq);
  }
}
