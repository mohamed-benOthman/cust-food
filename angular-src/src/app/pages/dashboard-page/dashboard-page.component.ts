import { Component, OnInit } from '@angular/core';
import { Observable, zip, Subject } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { RegionsService } from 'src/app/services/regions.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  public authUser: Observable<any>;
  public regionData = new Subject<any>();

  constructor(private auth: AuthService, private regions: RegionsService) {}

  ngOnInit(): void {
    this.fetchRegionData();

    // just for demo purpose, log the data when the header select inputs change values
    this.regionData.subscribe((d) => console.log(d));
  }

  /**
   * Fetch latest data for regions & areas
   */
  fetchRegionData() {
    this.regions
      .getActive()
      .pipe(
        flatMap(({ region, area }) => {
          return zip(
            [{ region, area }],
            this.regions.getAreas(region.id),
            this.regions.getRegions()
          );
        })
      )
      .pipe(map(([active, areas, regions]) => ({ ...active, areas, regions })))
      .subscribe((d) => this.regionData.next(d));
  }

  /**
   * Change the region & areas state
   */
  changeRegion(data: any) {
    this.regions.setActive(data);
    this.fetchRegionData();
  }
}
