import { ManualRequestComponent } from './manual-request/manual-request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppSharedModule } from 'src/@shared-module/shared.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [MainComponent, ManualRequestComponent, NotificationComponent],
  entryComponents: [ManualRequestComponent, NotificationComponent]
})
export class AppMainModule {}
