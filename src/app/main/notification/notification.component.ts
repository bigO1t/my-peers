import { DataService } from 'src/@shared-module/services/data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  title = 'Request Received';
  constructor(
    public dialogRef: MatDialogRef<NotificationComponent>,
    private router: Router,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  acceptRequest() {
    this.data.user.paired_user = this.data.user.received.requester_email;
    this.dataService.getData('users', this.data.user.paired_user).subscribe((ruser: IUser) => {
      ruser.paired_user = this.data.user.key;
      this.dataService.addUpdateData('users', ruser);
      this.data.user.close_request = true;
      this.dataService.getDataList('users').subscribe((users: IUser[]) => {
        if (users && users.length > 0) {
          users
            .filter(x => x.received && x.received.requester_email === ruser.key)
            .forEach(x => {
              x.received = null;
              x.close_request = false;
              this.dataService.addUpdateData('users', x);
            });
          this.dialogRef.close();
          return;
        }
      });
      this.dialogRef.close();
      this.router.navigate(['/main/receiver']);
    });
  }

  cancel() {
    this.data.user.received = null;
    this.data.user.close_request = true;
    this.dataService.addUpdateData('users', this.data.user);
    this.dialogRef.close();
  }
}
