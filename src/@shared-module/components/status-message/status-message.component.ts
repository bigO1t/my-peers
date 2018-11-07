import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-status-message',
  templateUrl: 'status-message.component.html'
})

export class StatusMessageComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
