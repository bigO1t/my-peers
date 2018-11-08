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
    this.dataService.search('jum@test.com', 'users').subscribe(doc => {
      this.dataService.addUpdateData('users', doc.data());
      this.data.user.close_request = true;
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
