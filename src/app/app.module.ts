import { AppSplashScreenService } from './../@shared-module/services/splash-screen.service';
import { AppSharedModule } from './../@shared-module/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserService } from 'src/@shared-module/services/user.service';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IdentityService } from 'src/@shared-module/services/identity.service';
import { MessageService } from 'src/@shared-module/services/message.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { BaseModule } from 'src/@shared-module/base.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { App500errorComponent } from './errors/500/app500error.component';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [AppComponent, App500errorComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BaseModule,
    AppSharedModule,
    MatButtonModule
  ],
  providers: [UserService, AuthService, IdentityService, MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
