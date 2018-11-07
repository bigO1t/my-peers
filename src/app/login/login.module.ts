import { AppSharedModule } from './../../@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
