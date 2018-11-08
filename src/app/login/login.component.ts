import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/@shared-module/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  fetchUser(isLoggedIn) {
    return this.dataService.search(this.emailControl.value, 'users').subscribe(
      doc => {
        if (doc.exists) {
          let user = doc.data();
          if (user.password === this.passwordControl.value) {
            console.log(user);
            this.userService.currentUser = user;
            isLoggedIn(true);
            return;
          }
        }
        this.messageService.handleError<any>("Email and/or password doesn't exist");
        isLoggedIn(false);
      },
      () => {
        isLoggedIn(false);
        this.messageService.handleError<any>('Error Getting Data');
      }
    );
  }

  login() {
    if (this.emailControl.invalid || this.passwordControl.invalid) {
      return;
    }
    this.fetchUser(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/main']);
      }
    });
  }

  signUp() {
    this.router.navigate(['/signup']);
  }
}
