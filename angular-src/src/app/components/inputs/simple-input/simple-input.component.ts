import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss'],
})
export class SimpleInputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Output() getInput = new EventEmitter<string>();
  @Input() inputValue: string;
  @Input() type: string;
  @Input() icon: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() pattern: string;
  @Output() getInputStatus = new EventEmitter<boolean>();
  constructor() {}
  getInputValue(value: string) {
    this.getInput.emit(value);
  }
  getStatus(value: any) {
    if (value == null) { this.getInputStatus.emit(true); }
    else { this.getInputStatus.emit(value); }
  }
  ngOnInit(): void {}
}
