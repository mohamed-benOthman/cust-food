import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
