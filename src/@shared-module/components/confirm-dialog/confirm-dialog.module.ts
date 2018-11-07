import { NgModule } from '@angular/core';
import { AppConfirmDialogComponent } from './confirm-dialog.component';
import { AppSharedModule } from '../../shared.module';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppConfirmDialogComponent
  ],
  imports     : [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  exports     : [
    AppConfirmDialogComponent
  ],
  entryComponents: [
    AppConfirmDialogComponent
  ]
})
export class AppConfirmDialogModule {}
