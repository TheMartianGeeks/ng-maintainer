import { Injectable, Inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
/**
 * Vendor library
 */
import { NgMaintainerConfigService, NgMaintainerConfig } from '../ng-maintainer.module';
/**
 * RxJS
 */
import { Observable, of } from 'rxjs';
import {first, map, tap} from 'rxjs/internal/operators';

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
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.changePage();
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  private changePage() {
    this.maintainerModeIsEnable().pipe(
      tap((res) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/home']);
        }
      }),
      first()
    );
  }
}
