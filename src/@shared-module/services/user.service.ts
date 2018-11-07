import { Injectable, Inject } from '@angular/core';

@Injectable()
export class UserService {
  private appNameAbbrev = '';

  constructor(@Inject('APP_NAME_ABBREV') appNameAbbrev: string) {
    this.appNameAbbrev = appNameAbbrev;
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem(`${this.appNameAbbrev}_user`));
  }

  set currentUser(user) {
    localStorage.setItem(`${this.appNameAbbrev}_user`, JSON.stringify(user));
  }

  logout(isLoggedIn): void {
    isLoggedIn(false);
  }
}
