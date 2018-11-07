import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AppMatchMediaService } from './services/match-media.service';
import { AppSplashScreenService } from './services/splash-screen.service';

@NgModule({
  entryComponents: [],
  providers: [AppMatchMediaService, AppSplashScreenService]
})
export class BaseModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: BaseModule
  ) {
    if (parentModule) {
      throw new Error('Base Module is already loaded. Import it in the AppModule only!');
    }
  }
}
