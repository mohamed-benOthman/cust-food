import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarsService } from 'src/app/services/sidebars.service';
import { UnitService } from 'src/app/services/unit.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: any;
  userId: any;
  userName: string = '';
  pages: any;
  public menu = {
    isOpen: false,
  };
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private sidebar: SidebarsService,
    private unitsService: UnitService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.pages = [
      { title: 'Search Recipe', path: 'searchRecipe/' + this.userId },
      { title: 'My Profile', path: 'myProfile/' + this.userId },
    ];
    console.log(this.userId);
    this.authenticationService.getData(this.userId).subscribe((res: any) => {
      this.userName = res.userName;
    });
  }
  reset() {
    this.router
      .navigateByUrl('refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigateByUrl(
          'dashboardPage/' + this.userId + '/searchRecipe/' + this.userId
        );
      });
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
