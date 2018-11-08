import { AppSharedModule } from './../../../@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequesterComponent } from './requester.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [RequesterComponent]
})
export class RequesterModule {}
