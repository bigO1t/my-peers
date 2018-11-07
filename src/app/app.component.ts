import { environment } from './../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Peers';

  baseUrl: string;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {}
}
