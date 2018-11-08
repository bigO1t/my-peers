import { UserService } from './../../@shared-module/services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user = <IUser>{};
  constructor(private router: Router, private userService: UserService) {
    this.user = this.userService.currentUser;
  }

  ngOnInit() {}

  logOut() {
    this.router.navigate(['/login']);
  }
}
