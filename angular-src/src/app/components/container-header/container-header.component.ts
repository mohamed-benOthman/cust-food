import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss'],
})
export class ContainerHeaderComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
