import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  password1: string;
  password2: string;
  userName: string;
  email: string;
  errorMessage = '';
  loading = false;
  error = false;
  emailStatus = true;
  password1Status = true;
  password2Status = true;
  userNameStatus = true;
  success = false;
  resultMessage =
    'A Confirmation Email is Sent (You may sometimes find it in the spam) ';
  passwordsCheck() {
    if (this.password1 == this.password2) {
      return false;
    } else {
      return true;
    }
  }
  onSubmit(form: NgForm) {
    this.error = false;
    this.loading = true;
    const user: User = {
      email: this.email,
      userName: this.userName,
      password: this.password1,
    };
    this.authService.register(user).subscribe(
      (res) => {
        console.log(res);
        this.authService.createConfirmToken(this.email).subscribe((res) => {
          this.loading = false;
          this.success = true;
        });
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.errorMessage = err.error.message;
        this.loading = false;
      }
    );
  }
  ngOnInit(): void {}
}
