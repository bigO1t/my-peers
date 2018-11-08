import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { App500errorComponent } from './errors/500/app500error.component';
import { LoginComponent } from './login/login.component';
import { App404errorComponent } from './errors/404/app404error/app404error.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent },
  { path: 'errors/404', component: App404errorComponent },
  { path: 'errors/500', component: App500errorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/errors/404', pathMatch: 'full' }
];
//
