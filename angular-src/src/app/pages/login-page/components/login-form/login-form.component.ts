import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  submitted = false;
  focusedInput = '';
  loading = false;
  email: string;
  password: string;
  user: any;
  emailStatus = true;
  passwordStatus = true;
  error = false;
  errMessage: string;

  @Output() login = new EventEmitter<any>();
  getInputValue(value: string) {}

  /**
   * Trigger a login event when submitting the form
   */
  onSubmit(form: NgForm) {
    this.error = false;
    this.loading = true;
    const user = {
      password: this.password,
      email: this.email,
    };

    this.authenticationService.login(user).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl(
          'dashboardPage/' + res.id + '/searchRecipe/' + res.id
        );
      },
      (err) => {
        this.error = true;
        this.errMessage = err.error.message;
        this.loading = false;
      }
    );
  }
}
