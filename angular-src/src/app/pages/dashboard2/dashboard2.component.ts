import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
})
export class Dashboard2Component implements OnInit {
  userId: any;
  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
  }

  ngOnInit(): void {}
}
