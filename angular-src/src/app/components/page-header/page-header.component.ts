import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidebarsService } from 'src/app/services/sidebars.service';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() user: any;
  @Input() regionData: any = {
    area: null,
    region: null,
    areas: [],
    regions: [],
  };

  @Output() changeRegion = new EventEmitter<any>();

  public menu = {
    isOpen: false,
  };

  constructor(
    private sidebar: SidebarsService,
    private unitsService: UnitService
  ) {}

  get units() {
    return this.unitsService.units;
  }

  get unit() {
    return this.unitsService.currentUnit;
  }

  /**
   * Change the selected region & area
   * @param type Region or area to change
   * @param value Actual value for the new region/area
   */
  changeLocation(type: string, value: string) {
    this.changeRegion.emit({
      type,
      value: this.regionData[`${type}s`].find((d: any) => d.id === value),
    });
  }

  changeUnit(value: string) {
    this.unitsService.change(value);
  }

  /**
   * Open the sidebar for managing regions & areas
   */
  editRegions() {
    this.sidebar.open({ editor: 'manage-regions-areas' });
  }

  /**
   * Toggle mobile menu
   * @param toggl Show or hide menu
   */
  toggleMenu(toggl?: boolean) {
    const { isOpen } = this.menu;

    this.menu.isOpen = typeof toggl === 'boolean' ? toggl : !isOpen;
  }
}
