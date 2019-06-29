import { Component } from '@angular/core';
import {NgMaintainerService} from 'ng-maintainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-maintenance';

  constructor(private ngMaintainerService: NgMaintainerService) {
    this.ngMaintainerService.listenNavigation();
  }
}
