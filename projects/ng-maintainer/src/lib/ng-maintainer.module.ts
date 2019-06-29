import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Library vendor
 */
import { NgMaintainerComponent } from './components/ng-maintainer.component';
import { NgMaintainerService } from './services/ng-maintainer.service';
import { NgMaintainerRoutingModule } from './ng-maintainer-routing.module';
/**
 * first define an interface for our configuration
 */
export interface NgMaintainerConfig {
  maintainerMode: boolean;
  title?: string;
  description?: string;
  image?: string;
}

/**
 * then define injectionToken
 */
export const NgMaintainerConfigService = new InjectionToken<NgMaintainerConfig>(
  'TestLibConfig'
);

@NgModule({
  declarations: [NgMaintainerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgMaintainerRoutingModule
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
