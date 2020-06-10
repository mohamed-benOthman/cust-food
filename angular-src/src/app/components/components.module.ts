import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { InputsModule } from './inputs/inputs.module';

import { PageHeaderComponent } from './page-header/page-header.component';
import { NavigationComponent } from './page-header/navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { NotificationsComponent } from './page-header/notifications/notifications.component';
import { UserProfileComponent } from './page-header/user-profile/user-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageRegionsAreasComponent } from './sidebar/editors/manage-regions-areas/manage-regions-areas.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ContainerHeaderComponent } from './container-header/container-header.component';

import { RadioGroupComponent } from './radio-group/radio-group.component';
import { TableComponent } from './table/table.component';
import {
  NgbModule,
  NgbDatepicker,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { CheckBoxTableComponent } from './table/check-box-table/check-box-table.component';
import { IconsModule } from './icons/icons.module';
import { RadioTableComponent } from './table/radio-table/radio-table.component';
import { FormsModule } from '@angular/forms';
import { ResultCardComponent } from './result-card/result-card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HeaderComponent } from './header/header.component';
import { FoodIconComponent } from './food-icon/food-icon.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

const components = [
  PageHeaderComponent,
  NavigationComponent,
  SidebarComponent,

  LogoComponent,
  ResultCardComponent,
  ContainerHeaderComponent,
  RadioGroupComponent,
  TableComponent,
  RadioTableComponent,
  CheckBoxTableComponent,
  ErrorMessageComponent,
  NotificationsComponent,
  UserProfileComponent,
  ManageRegionsAreasComponent,
  MobileMenuComponent,
  ResultCardComponent,
  HeaderComponent,
  FoodIconComponent,
  LoadingSpinnerComponent,
  RecipeCardComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components, ContainerHeaderComponent],

  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    DirectivesModule,
    InputsModule,
    NgbModule,
    IconsModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
