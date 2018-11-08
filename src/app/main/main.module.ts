import { ManualRequestComponent } from './manual-request/manual-request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppSharedModule } from 'src/@shared-module/shared.module';
import { NotificationComponent } from './notification/notification.component';
import { ReceiverModule } from './receiver/receiver.module';
import { RequesterModule } from './requester/requester.module';

@NgModule({
  imports: [AppSharedModule, ReceiverModule, RequesterModule],
  declarations: [MainComponent, ManualRequestComponent, NotificationComponent],
  entryComponents: [ManualRequestComponent, NotificationComponent]
})
export class AppMainModule {}
