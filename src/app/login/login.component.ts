import { ILoginUser } from './login-user.interface';
import { Component, OnInit } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: ILoginUser = <ILoginUser>{};

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(
    private appSplashScreen: AppSplashScreenService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.appSplashScreen.hide();
    }, 1000);
  }

  fetchUser(isLoggedIn) {
    return this.authService.getUser('npererar@gmail.com').subscribe(
      (user: any) => {
        if (user) {
          isLoggedIn(true);
        }
        isLoggedIn(false);
      },
      error => {
        isLoggedIn(false);
      }
    );
  }

  login() {
    if (this.emailControl.invalid || this.passwordControl.invalid) {
      return;
    }
  }

  signUp() {
    this.router.navigate(['/signup']);
  }
}
