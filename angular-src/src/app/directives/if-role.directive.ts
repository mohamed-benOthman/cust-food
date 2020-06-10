import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

/**
 * Check if current auth user has any of the specified roles
 */

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective implements OnInit {
  private hasView = false;
  private role$ = new BehaviorSubject('');

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService) {}

  @Input() set appIfRole(role: string) {
    this.role$.next(role);
  }

  ngOnInit() {
    this.auth.user
      .pipe(withLatestFrom(this.role$))
      .pipe(map(this.checkRoles.bind(this)))
      .subscribe(this.updateView.bind(this));
  }

  /**
   * Check if expected roles are met
   * @param param0 Data from observables
   */
  checkRoles([user, expected]: Array<any|string>) {
    return expected.split(' ').some((role: string) => user.roles.indexOf(role) > -1);
  }

  /**
   * Attach the view element if condition is met
   * @param condition True or false if user has expected role
   */
  private updateView(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
