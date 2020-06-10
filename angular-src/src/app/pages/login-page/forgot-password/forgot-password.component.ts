import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}
  loading = false;
  error = false;
  errorMessage = '';
  email: string;
  emailStatus = true;
  resultMessage = '';
  success = false;

  onSubmit(form: NgForm) {
    this.error = false;
    this.loading = true;
    this.auth.sendResetEmail(this.email).subscribe(
      (res: any) => {
        console.log(res);

        this.resultMessage = 'An email is sent to you ';
        this.success = true;
        this.loading = false;
      },
      (err) => {
        this.error = true;
        this.errorMessage = err.error.message;
        this.loading = false;
      }
    );
  }
}
