import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
const { units } = environment;

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private unit$: any = new BehaviorSubject<any>(units[0]);
  public unit = this.unit$.asObservable();

  get units() {
    return [...units];
  }

  change(unit: string) {
    this.unit$.next(units.find(({ id }) => id === unit));
  }

  get currentUnit() {
    return this.unit$.getValue();
  }

  public convert(value: number, sourceUnit: string): number {
    // TODO implement unit conversion
    return value;
  }
}
