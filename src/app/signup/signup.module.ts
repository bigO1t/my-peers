import { AppSharedModule } from 'src/@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [SignupComponent]
})
export class SignupModule {}
