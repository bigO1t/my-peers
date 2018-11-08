import { Component, OnInit, Inject } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Peers';

  baseUrl: string;

  constructor(
    private appSplashScreen: AppSplashScreenService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    setTimeout(() => {
      this.appSplashScreen.hide();
    }, 4000);
  }
}
