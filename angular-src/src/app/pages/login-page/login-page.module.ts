import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { LogoutComponent } from './logout.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { InputsModule } from 'src/app/components/inputs/inputs.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';

@NgModule({
  declarations: [LoginPageComponent, LogoutComponent, LoginFormComponent, ForgotPasswordComponent, ResetPasswordComponent, ConfirmUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    InputsModule,
    ComponentsModule,
  ],
})
export class LoginPageModule {}
