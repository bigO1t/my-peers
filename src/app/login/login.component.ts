import { Component, OnInit } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoad: boolean | null = null;
  isError = false;
  isLoggedIn = false;

  constructor(
    private appSplashScreen: AppSplashScreenService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

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
        if (error.status === 401) {
          this.isError = false;
          this.authService.goToUnauthorized();
          return;
        }
        this.isError = true;
        this.authService.goToError();
      }
    );
  }

  login() {}

  signUp() {
    this.router.navigate(['/signup']);
  }
}
