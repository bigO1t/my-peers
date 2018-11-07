import { DataService } from './data.service';
import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private baseUrl;
  private ref;

  constructor(
    private router: Router,
    private dataService: DataService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  getUser(email: string) {
    return this.dataService.searchEmail(email);
  }

  goToUnauthorized() {
    this.router.navigate(['/errors/error401']);
  }

  goToError() {
    this.router.navigate(['/errors/error500']);
  }
}
