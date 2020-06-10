import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Output() getInput = new EventEmitter<string>();
  @Input() width: string;
  constructor() {}

  getInputValue(value: string) {
    this.getInput.emit(value);
  }
  ngOnInit(): void {}
}
