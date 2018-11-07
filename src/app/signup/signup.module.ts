import { AppSharedModule } from 'src/@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [SignupComponent]
})
export class SignupModule {}
