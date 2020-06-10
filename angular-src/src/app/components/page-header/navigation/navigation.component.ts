import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  pages = [
    { title: 'sdsd', path: 'contacts' },
    { title: 'Terminal Companies', path: 'terminal-companies' },
    { title: 'Tanks', path: 'tanks' },
  ];

  public menu = {
    isOpen: false,
  };

  constructor(
    private nav: NavigationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // load the correct navigation routes for current user
  }

  /**
   * Get the active route
   */
  get activeRoute() {
    return this.pages.find(({ path }: any) =>
      this.router.isActive(this.router.parseUrl(`/dashboard/${path}`), false)
    );
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
