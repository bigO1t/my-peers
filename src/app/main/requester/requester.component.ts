import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.scss']
})
export class RequesterComponent implements OnInit {
  user = <IUser>{};
  electricalFormControl = new FormControl('');
  emailFormControl = new FormControl('', [Validators.required]);
  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService
  ) {
    this.user = this.userService.currentUser;
  }

  ngOnInit() {}

  finish() {
    this.dataService.search(this.user.paired_user, 'users').subscribe(doc => {
      this.user.close_request = false;
      this.dataService.addUpdateData('users', this.user);
    });
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}
