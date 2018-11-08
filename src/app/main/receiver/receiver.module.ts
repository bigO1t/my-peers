import { AppSharedModule } from './../../../@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { ReceiverComponent } from './receiver.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [ReceiverComponent]
})
export class ReceiverModule {}
