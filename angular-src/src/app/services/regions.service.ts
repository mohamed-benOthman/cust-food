import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegionsService extends ApiService {
  private state: any = {
    region: null,
    area: null,
  };

  /**
   * Set active region or area
   * @param param0 Data to set as active
   */
  public setActive({type, value} = {} as any) {
    this.state[type] = value;
  }

  /**
   * Get the selected region & area
   */
  public getActive(): Observable<any> {
    const { region, area } = this.state;

    return this.fetch('/regions').pipe(map(d => ({
      region: region || d.regions[0],
      area: area || d.areas.find((a: any) => a.region === (region || d.regions[0]).id)
    })));
  }

  /**
   * Fetch regions from api
   */
  public getRegions(): Observable<any> {
    return this.fetch('/regions').pipe(map(d => d.regions));
  }

  /**
   * Fetch areas from api
   * @param region Get areas only for passed region
   */
  public getAreas(region?: string): Observable<any> {
    return this.fetch('/regions').pipe(map(d => (
      d.areas.filter((area: any) => !region || area.region === region)
    )));
  }

  /**
   * Selected region
   */
  get selectedRegion() {
    return this.state.getValue().region;
  }

  /**
   * Selected area
   */
  get selectedArea() {
    return this.state.getValue().area;
  }
}
