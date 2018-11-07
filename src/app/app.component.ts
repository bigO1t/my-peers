import { environment } from './../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Peers';

  isLoad: boolean | null = null;
  isError = false;
  isLoggedIn = false;

  baseUrl: string;

  constructor(
    private appSplashScreen: AppSplashScreenService,
    private authService: AuthService,
    private userService: UserService,
    private dataService: DataService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.fetchUser(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      setTimeout(() => {
        this.isLoad = true;
        this.appSplashScreen.hide();
      }, 4000);
    });
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
}
