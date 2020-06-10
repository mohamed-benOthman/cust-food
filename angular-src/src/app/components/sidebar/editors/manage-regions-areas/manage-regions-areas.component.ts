import { Component } from '@angular/core';
import { SidebarsService } from 'src/app/services/sidebars.service';

@Component({
  selector: 'app-manage-regions-areas',
  templateUrl: './manage-regions-areas.component.html',
  styleUrls: ['./manage-regions-areas.component.scss']
})
export class ManageRegionsAreasComponent {

  constructor(private sidebar: SidebarsService) {}

  close() {
    this.sidebar.close();
  }
}
