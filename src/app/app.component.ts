import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';

const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: environment.firebaseApiKey,
  authDomain: environment.firebaseAuthDomain,
  databaseURL: environment.firebaseDatabaseURL,
  projectId: environment.firebaseProjectId,
  storageBucket: environment.firebaseStorageBucket
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Peers';

  constructor(private appSplashScreen: AppSplashScreenService) {}

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    setTimeout(() => {
      this.appSplashScreen.hide();
    }, 4000);
  }
}
