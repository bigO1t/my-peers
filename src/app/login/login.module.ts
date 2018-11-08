import { AppSharedModule } from './../../@shared-module/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { StatusMessageModule } from 'src/@shared-module/components';

@NgModule({
  imports: [AppSharedModule, StatusMessageModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
