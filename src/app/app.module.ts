import { LoginModule } from './login/login.module';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppMainModule } from './main/main.module';
import { App500errorComponent } from './errors/500/app500error.component';
import { App401errorComponent } from './errors/401/app401error/app401error.component';
import { App403errorComponent } from './errors/403/app403error/app403error.component';
import { App404errorComponent } from './errors/404/app404error/app404error.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    App404errorComponent,
    App500errorComponent,
    App401errorComponent,
    App403errorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BaseModule,
    AppSharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppMainModule,
    LoginModule,
    SignupModule
  ],
  providers: [UserService, AuthService, IdentityService, MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
