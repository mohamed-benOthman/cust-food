import { Component, OnInit, Input } from '@angular/core';
import { Mixes } from 'src/backend-mock/data/mixes';
interface mix {
  sn: string;
  productName: string;
  description: any;
}
@Component({
  selector: 'app-radio-table',
  templateUrl: './radio-table.component.html',
  styleUrls: ['./radio-table.component.scss'],
})
export class RadioTableComponent implements OnInit {
  constructor() {}
  @Input() tanks: any = new Map();
  mixesToShow: any = [];
  data = Mixes;

  space = '% ';
  labels = ['SN', 'Product', 'Product Description'];
  // getChosenTanks() {
  //   let mixesToShow: any = [];
  //   let ch = '';
  //   for (let [key, value] of this.tanks) {
  //     if (value === true) {
  //       for (let item2 of this.data) {
  //         for (let item of this.data.description) {
  //           if (key.productName === item.productName && item.percentage > 0) {
  //             mixesToShow.push(item2);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return ch;
  // }
  searchProduct() {}
  getDescriptionString(item: any) {
    const ch = '';
    for (const i of item.description) {
    }
  }
  getRandomColors() {
    const colors = ['#B2CC34', '#00B2BD', '#009DD9', '#0B2D71', '#769231'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  ngOnInit(): void {}
}
