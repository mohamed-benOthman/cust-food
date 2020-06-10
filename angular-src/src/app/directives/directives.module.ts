import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfRoleDirective } from './if-role.directive';

@NgModule({
  declarations: [
    IfRoleDirective,
  ],
  exports: [
    IfRoleDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
