import { UserService } from './../../../@shared-module/services/user.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/@shared-module/services/data.service';
import { MessageService } from 'src/@shared-module/services/message.service';
import { IUser } from 'src/@shared-module/interfaces/user.interface';
import { IRequest } from 'src/@shared-module/interfaces/request.interface';

@Component({
  selector: 'app-manual-request',
  templateUrl: './manual-request.component.html',
  styleUrls: ['./manual-request.component.scss']
})
export class ManualRequestComponent implements OnInit {
  title = 'Manual Request';
  width = '60%';
  height = '60%';

  categories = ['Plumbling', 'Flooring', 'Electricity'];

  itemNameFormControl = new FormControl('', [Validators.required]);

  itemDescriptionControl = new FormControl('', [Validators.required]);

  categoryControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<ManualRequestComponent>,
    private dataService: DataService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.adaptToSmallScreen();
  }

  sendRequest() {
    if (
      this.itemNameFormControl.invalid ||
      this.itemDescriptionControl.invalid ||
      this.categoryControl.invalid
    ) {
      return;
    }

    const user = this.userService.currentUser;

    const request: IRequest = {
      requester_first_name: user.first_name,
      requester_email: user.key,
      item_name: this.itemNameFormControl.value,
      item_description: this.itemDescriptionControl.value,
      item_category: this.categoryControl.value
    };

    user.requested = request;

    this.dataService.addUpdateData('users', user);

    this.dataService.getDataList('users').subscribe((users: IUser[]) => {
      if (users && users.length > 0) {
        users
          .filter(x => !x.requested && !x.received && !x.paired_user && !x.close_request)
          .forEach(x => {
            x.received = request;
            this.dataService.addUpdateData('users', x);
          });
        this.dialogRef.close();
        return;
      }
      this.messageService.handleError<any>('Error getting users');
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  adaptToSmallScreen() {
    if (window.innerWidth < 960) {
      this.width = '100%';
    }

    if (window.innerHeight < 800) {
      this.height = '100%';
    }

    this.dialogRef.updateSize(this.width, this.height);
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.adaptToSmallScreen();
  }
}
