import { Component, OnInit } from '@angular/core';
import { AppSplashScreenService } from 'src/@shared-module/services/splash-screen.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/@shared-module/services/auth.service';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
    private appSplashScreen: AppSplashScreenService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  firstNameFormControl = new FormControl('', [
    Validators.required
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  ngOnInit() {

  }

  signUp() {
    console.log(this.firstNameFormControl.value);
    console.log(this.lastNameFormControl.value);
    console.log(this.emailFormControl.value);
    console.log(this.passwordFormControl.value);
  }
}


