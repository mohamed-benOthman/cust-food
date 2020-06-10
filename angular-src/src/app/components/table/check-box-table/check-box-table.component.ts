import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-check-box-table',
  templateUrl: './check-box-table.component.html',
  styleUrls: ['./check-box-table.component.scss'],
})
export class CheckBoxTableComponent implements OnInit {
  @Input() labels: string[];
  @Input() data: any;
  @ViewChild('myCheckBox') myCheckbox: ElementRef;
  constructor() {}
  tanksMap = new Map();
  @Output() checkedTank = new EventEmitter<Map<any, any>>();
  ngOnInit(): void {
    for (const item of this.data) {
      this.tanksMap.set(item, false);
    }
  }
  select(item: any) {
    this.tanksMap.set(item, !this.tanksMap.get(item));
    this.checkedTank.emit(this.tanksMap);
  }
}
