import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  UrlSegment,
  UrlMatchResult,
} from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { RegisterPageComponent } from './pages/login-page/register-page/register-page.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { RecipeComponent } from './pages/dashboard2/recipe/recipe.component';
import { MyProfileComponent } from './pages/dashboard2/my-profile/my-profile.component';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { ForgotPasswordComponent } from './pages/login-page/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/login-page/reset-password/reset-password.component';
import { ConfirmUserComponent } from './pages/login-page/confirm-user/confirm-user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      // routes that need authentication
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard-page/dashboard-page.module').then(
            (m) => m.DashboardPageModule
          ),
      },
    ],
  },

  {
    /**
     * Authentication routes: login& logout
     * need to use the matcher to not consume the "login" and "logout" segments
     */
    matcher: (url: UrlSegment[]) =>
      (url[0]?.path.match(/^(login|logout)/)
        ? { consumed: [] }
        : null) as UrlMatchResult,
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'dashboardPage/:userId',
    component: Dashboard2Component,
    canActivate: [AuthGuard],
    children: [
      { path: 'searchRecipe/:userId', component: RecipeComponent },
      { path: 'myProfile/:userId', component: MyProfileComponent },
    ],
  },
  { path: 'refresh', component: RefreshComponent, canActivate: [AuthGuard] },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'resetPassword/:token',
    component: ResetPasswordComponent,
  },
  {
    path: 'confirmUser/:token',
    component: ConfirmUserComponent,
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
