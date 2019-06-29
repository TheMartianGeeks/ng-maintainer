import { Injectable, Inject } from '@angular/core';
import { NgMaintainerConfigService, NgMaintainerConfig } from '../ng-maintainer.module';
/**
 * RxJS
 */
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgMaintainerService {
  /**
   * Constructor
   */
  constructor(@Inject(NgMaintainerConfigService) private config: NgMaintainerConfig) { }

  /**
   * Get config
   */
  public getConfig(): Observable<NgMaintainerConfig> {
    return of(this.config);
  }

  /**
   * Maintainer mode is enable
   */
  public maintainerModeIsEnable(): Observable<boolean> {
    return of(this.config.maintainerMode);
  }

  /**
   * Get title
   */
  public getTitle(): Observable<string> {
    return of (this.config.title);
  }

  /**
   * Get description
   */
  public getDescription(): Observable<string> {
    return of (this.config.description);
  }
}
