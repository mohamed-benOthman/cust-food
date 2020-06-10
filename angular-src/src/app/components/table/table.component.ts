import { Component, OnInit, Input } from '@angular/core';
interface TableHeader {
  label: string;
  unity: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() labels: TableHeader[];
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
