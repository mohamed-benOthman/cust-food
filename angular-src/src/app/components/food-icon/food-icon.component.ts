import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-icon',
  templateUrl: './food-icon.component.html',
  styleUrls: ['./food-icon.component.scss'],
})
export class FoodIconComponent implements OnInit {
  @Input() height: string;
  @Input() icon: string;
  @Input() width: number;
  @Output() changeStatus = new EventEmitter();
  constructor() {}
  statut = false;
  @Input() name: string;
  capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  ngOnInit(): void {}
  changeStatut() {
    this.statut = !this.statut;
    const status: string = this.name + ',' + this.statut;
    this.changeStatus.emit(status);
  }
}
