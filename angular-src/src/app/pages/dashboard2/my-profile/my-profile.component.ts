import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class MyProfileComponent implements OnInit {
  userId: any;
  width: number = window.innerWidth;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.width = window.innerWidth;
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    console.log(this.width);
  }
  loading = false;
  recipes: any;
  lastReasearch: any;
  makeArray(value: string) {
    const arr = value.trim().split(',');
    console.log(arr);
    arr.pop();
    return arr;
  }
  ngOnInit(): void {
    this.loading = true;
    this.authenticationService.getData(this.userId).subscribe((res: any) => {
      console.log(res);
      this.recipes = res.wishList;
      this.loading = false;
      this.lastReasearch = res.lastReasearch;
      console.log(this.lastReasearch);
    });
  }
}
