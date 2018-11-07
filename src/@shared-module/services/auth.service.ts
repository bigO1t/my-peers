import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private baseUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  getUser() {
    return '';
  }

  goToUnauthorized() {
    this.router.navigate(['/errors/error401']);
  }

  goToError() {
    this.router.navigate(['/errors/error500']);
  }
}
