import { NotificationComponent } from './notification/notification.component';
import { DataService } from './../../@shared-module/services/data.service';
import { UserService } from './../../@shared-module/services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ManualRequestComponent } from './manual-request/manual-request.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user = <IUser>{};
  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    this.user = this.userService.currentUser;
    console.log(this.user);
    if (!this.user) {
      this.logOut();
    }
  }

  ngOnInit() {
    this.dataService.getData('users', this.user.key).subscribe((user: IUser) => {
      if (user.received && !user.paired_user) {
        const dialogRef = this.dialog.open(NotificationComponent, {
          width: '30%',
          height: '30%',
          autoFocus: false,
          data: { received: user.received, user: user }
        });

        dialogRef.afterClosed().subscribe(_ => {});
      }
    });
  }

  manualRequest() {
    const dialogRef = this.dialog.open(ManualRequestComponent, {
      width: '60%',
      height: '60%',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(_ => {});
  }

  qrRequest() {}

  logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
