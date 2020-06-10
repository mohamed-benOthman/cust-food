import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  constructor() {}
  formatDate(myDate: NgbDateStruct) {
    let date = '';
    const day = myDate.day;
    const month = myDate.month;
    switch (day) {
      case 1:
        date += '1st';
        break;
      case 2:
        date += '2nd';
        break;
      case 3:
        date += '3rd';
        break;
      default:
        date += day + 'th';
    }
    switch (month) {
      case 1:
        date += ' January';
        break;
      case 2:
        date += ' February';
        break;
      case 3:
        date += ' March';
        break;
      case 4:
        date += ' April';
        break;
      case 5:
        date += ' May';
        break;
      case 6:
        date += ' June';
        break;
      case 7:
        date += ' July';
        break;
      case 8:
        date += ' August';
        break;
      case 9:
        date += ' September';
        break;
      case 10:
        date += ' October';
        break;
      case 11:
        date += ' November';
        break;
      case 12:
        date += ' December';
        break;
    }
    date += ' ' + myDate.year;
    return date;
  }
}
