import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { NgMaintainerComponent } from './components/ng-maintainer.component';
import { NgMaintainerService } from './services/ng-maintainer.service';

// first define an interface for our configuration
export interface NgMaintainerConfig {
  maintainerMode: boolean;
  title?: string;
  description?: string;
}

// then define injectionToken
export const NgMaintainerConfigService = new InjectionToken<NgMaintainerConfig>(
  'TestLibConfig'
);

@NgModule({
  declarations: [NgMaintainerComponent],
  imports: [
  ],
  exports: [NgMaintainerComponent]
})
export class NgMaintainerModule {
  static forRoot(config: NgMaintainerConfig): ModuleWithProviders {
    return {
      ngModule: NgMaintainerModule,
      providers: [
        NgMaintainerService,
        { provide: NgMaintainerConfigService, useValue: config }
      ]
    };
  }
}
