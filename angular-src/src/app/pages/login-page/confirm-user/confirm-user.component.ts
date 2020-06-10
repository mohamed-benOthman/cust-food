import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
})
export class ConfirmUserComponent implements OnInit {
  loading = false;
  success = false;
  token: any;
  resultMessage = ';';
  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    this.auth.checkConfimationToken(this.token).subscribe(
      (res) => {},
      (err) => {
        this.resultMessage = 'Invalid Token';
        this.success = true;
      }
    );
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.loading = true;
    this.auth.confirmUser(this.token).subscribe((res) => {
      this.success = true;
      this.resultMessage = 'Your Account is confirmed';
      this.loading = false;
    });
    this.loading = false;
  }
}
