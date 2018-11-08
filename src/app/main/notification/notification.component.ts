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
      this.router.navigate(['/main/receiver']);
      this.dialogRef.close();
    });
  }

  cancel() {
    this.data.user.received.close = true;
    this.dataService.addUpdateData('users', this.data.user);
    this.dialogRef.close();
  }
}
