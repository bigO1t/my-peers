import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { App500errorComponent } from './errors/500/app500error.component';
import { LoginComponent } from './login/login.component';
import { App404errorComponent } from './errors/404/app404error/app404error.component';

export const routes: Routes = [
  //{ path: 'errors/error401', component: AppError401Component },
  { path: 'errors/error404', component: App404errorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'errors/error500', component: App500errorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: App404errorComponent },
  { path: '**', redirectTo: '/errors/error404', pathMatch: 'full' }
];
//
