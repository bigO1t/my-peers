import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { IUser } from 'src/@shared-module/interfaces/user.interface';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.scss']
})
export class RequesterComponent implements OnInit {
  user = <IUser>{};
  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService
  ) {
    this.user = this.userService.currentUser;
  }

  ngOnInit() {}

  finish() {
    this.dataService.addUpdateData('users', this.user);
  }
}
