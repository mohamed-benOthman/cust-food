import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';
const { navigationConfig: navRoutes } = environment;

import { AuthGuard } from 'src/app/auth/auth.guard';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
