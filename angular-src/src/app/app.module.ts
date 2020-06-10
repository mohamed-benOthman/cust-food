import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// http interceptors
import { fakeBackendProvider } from '../backend-mock/interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from './pages/login-page/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { InputsModule } from './components/inputs/inputs.module';
import { ComponentsModule } from './components/components.module';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { RecipeComponent } from './pages/dashboard2/recipe/recipe.component';
import { MyProfileComponent } from './pages/dashboard2/my-profile/my-profile.component';
import { Dashboard2RoutingModule } from './pages/dashboard2/dashboard2-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from './pipes/pipes.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    Dashboard2Component,
    RecipeComponent,
    MyProfileComponent,
    RefreshComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    InputsModule,
    ComponentsModule,
    Dashboard2RoutingModule,
    FlexLayoutModule,
    PipesModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    AuthGuard,
    // provider used to create fake backend
    fakeBackendProvider,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
