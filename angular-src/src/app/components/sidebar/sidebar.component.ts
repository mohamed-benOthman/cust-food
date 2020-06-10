import { Component, OnInit, OnDestroy } from '@angular/core';

import { SidebarsService } from 'src/app/services/sidebars.service';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public next = '';
  public state: any = {};
  private sub: any;

  constructor(private service: SidebarsService) { }

  ngOnInit(): void {
    // subscribe to sidebar service
    // open the sidebar based on service state
    this.sub = this.service.state.pipe(
      map((state: any) => ({ ...state, visible: Boolean(state.editor) })),
      tap((state: any) => this.next = state.visible ? 'show' : 'hide'),
      delay((300)),
      tap(() => this.next = '')
    ).subscribe((state: any) => this.state = state);
  }

  ngOnDestroy() {
    // unsubscribe from service
    this.sub.unsubscribe();
  }
}
