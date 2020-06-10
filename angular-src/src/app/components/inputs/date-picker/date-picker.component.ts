import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  NgbDateStruct,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from '../dateformat';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
  ],
})
export class DatePickerComponent implements OnInit {
  constructor() {}
  model: NgbDateStruct;
  @Output() selectedDate = new EventEmitter<NgbDateStruct>();
  ngOnInit(): void {}
}
