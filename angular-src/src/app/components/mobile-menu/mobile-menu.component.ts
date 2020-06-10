import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() set isOpen(open: boolean) {
    this.open = open;
    document.body.classList[open ? 'add' : 'remove']('no-overflow');
  }

  @HostBinding('class.is-open') open = false;
}
