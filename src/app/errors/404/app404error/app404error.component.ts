import { Component, OnInit } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';

@Component({
  selector: 'app-app404error',
  templateUrl: './app404error.component.html',
  styleUrls: ['./app404error.component.scss']
})
export class App404errorComponent implements OnInit {

  constructor(private appSplashScreen: AppSplashScreenService) { }

  ngOnInit() {
    setTimeout(() => {
      this.appSplashScreen.hide();
    }, 200);
  }

}
