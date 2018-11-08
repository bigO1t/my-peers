import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { Router } from '@angular/router';
import { UserService } from 'src/@shared-module/services/user.service';
import { DataService } from 'src/@shared-module/services/data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
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
    this.dataService.search(this.user.paired_user, 'users').subscribe(doc => {
      if (doc.exists) {
        let pairedUser = doc.data();
        pairedUser.paired_user = null;
        this.dataService.addUpdateData('users', pairedUser);
      }
      this.user.paired_user = null;
      this.dataService.addUpdateData('users', this.user);
    });
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
