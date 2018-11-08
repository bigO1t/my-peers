import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { App404errorComponent } from './errors/404/app404error/app404error.component';
import { ReceiverComponent } from './main/receiver/receiver.component';
import { RequesterComponent } from './main/requester/requester.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent },
  { path: 'main/receiver', component: ReceiverComponent },
  { path: 'main/requester', component: RequesterComponent },
  { path: 'errors/404', component: App404errorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/errors/404', pathMatch: 'full' }
];
