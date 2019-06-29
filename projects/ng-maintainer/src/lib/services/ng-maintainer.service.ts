import { Injectable, Inject } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
/**
 * Vendor library
 */
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
  constructor(
    @Inject(NgMaintainerConfigService) private config: NgMaintainerConfig, private router: Router
  ) { }

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

  /**
   * Get description
   */
  public getImage(): Observable<string> {
    return of (this.config.image);
  }

  /**
   * Listen navigation
   */
  public listenNavigation() {
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        this.changePage();
      }
    });
  }

  /**
   * Change page action
   */
  changePage() {
    this.maintainerModeIsEnable()
      .subscribe((res) => {
        if (res && window.location.pathname !== '/maintenance-mode') {
          window.location.href = '/maintenance-mode';
        } else if (!res && window.location.pathname === '/maintenance-mode') {
          window.location.href = '/';
        }

        return false;
      });
  }
}
