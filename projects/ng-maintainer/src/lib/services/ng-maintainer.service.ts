import { Injectable, Inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
/**
 * Vendor library
 */
import { NgMaintainerConfigService, NgMaintainerConfig } from '../ng-maintainer.module';
/**
 * RxJS
 */
import {forkJoin, Observable, of} from 'rxjs';
import {first, map, switchMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NgMaintainerService {
  /**
   * Constructor
   */
  constructor(
    @Inject(NgMaintainerConfigService) private config: NgMaintainerConfig,
    private router: Router
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
   * Listen navigation
   */
  public listenNavigation() {
    switchMap();
    this.router.events.pipe(
      map(event => {
        if (event instanceof NavigationStart) {
          // Show loading indicator
          if (event) {
            this.changePage();
          }
        }
      }),
      first()
    );
  }

  private changePage() {
    this.maintainerModeIsEnable().subscribe((enable) => {
      if (enable) {
        this.router.navigateByUrl('/maintenance-mode');
      }
    });
  }
}
