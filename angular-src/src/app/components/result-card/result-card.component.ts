import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  @Input() mix: string;
  @Input() date: string;
  @Input() maxOrder: string;
  @Input() unity: string;
  constructor() {}

  ngOnInit(): void {}
}
