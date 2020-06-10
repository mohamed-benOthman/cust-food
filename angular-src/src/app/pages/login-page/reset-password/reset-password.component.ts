import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  password1: string = '';
  password2: string = '';
  password1Status = false;
  password2Status = false;
  error = false;
  errorMessage = '';
  loading = false;
  token: any;
  failure = false;
  resultMessage = 'Token Not Found';

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.token = this.route.snapshot.paramMap.get('token');
    this.auth.checkToken(this.token).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.failure = true;
      }
    );
  }

  ngOnInit(): void {}
  passwordsCheck() {
    if (this.password1.length == 0) return true;
    if (this.password1 == this.password2) {
      return false;
    } else {
      return true;
    }
  }
  onSubmit(form: NgForm) {
    this.auth.resetPassword(this.password1, this.token).subscribe((res) => {
      {
        this.failure = true;
        this.resultMessage = 'Password Updated Successfully';
      }
    });
  }
}
