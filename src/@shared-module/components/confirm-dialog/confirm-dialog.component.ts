import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html'
})
export class AppConfirmDialogComponent {
  public confirmTitle = 'Confirm Delete';
  public confirmMessage = 'Are you sure you want to delete this?';
  public showConfirm = true;
  public cancelTitle = "Cancel";
  public confirmButtonTitle = "Confirm";
  constructor(
    public dialogRef: MatDialogRef<AppConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      if (data.confirmMessage) {
        this.confirmMessage = data.confirmMessage;
      }
      if (data.confirmTitle) {
        this.confirmTitle = data.confirmTitle;
      }
      if (data.cancelTitle) {
        this.cancelTitle = data.cancelTitle;
      }
      if (data.confirmButtonTitle) {
        this.confirmButtonTitle = data.confirmButtonTitle;
      }
    }
  }
}
