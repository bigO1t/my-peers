import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppSharedModule } from 'src/@shared-module/shared.module';

@NgModule({
  imports: [AppSharedModule],
  declarations: [MainComponent]
})
export class AppMainModule {}
