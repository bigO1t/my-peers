import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../shared.module';
import { StatusMessageComponent } from './status-message.component';

@NgModule({
  declarations: [
    StatusMessageComponent
  ],
  imports     : [
    AppSharedModule
  ],
  exports     : [
    StatusMessageComponent
  ],
  entryComponents: [
    StatusMessageComponent
  ]
})
export class StatusMessageModule {}
