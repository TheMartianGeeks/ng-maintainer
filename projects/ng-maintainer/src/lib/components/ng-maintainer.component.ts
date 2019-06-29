import { Component, OnInit } from '@angular/core';
import { NgMaintainerService } from '../services/ng-maintainer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ng-maintainer',
  templateUrl: './ng-maintainer.component.html',
  styleUrls: ['./ng-maintainer.component.scss']
})
export class NgMaintainerComponent implements OnInit {
  /**
   * Title
   */
  public title$: Observable<string>;

  /**
   * Description
   */
  public description$: Observable<string>;

  /**
   * Constructor
   */
  constructor(private ngMaintainerService: NgMaintainerService) { }

  /**
   * Life cycle ng init
   */
  ngOnInit() {
    this.title$ = this.ngMaintainerService.getTitle();
    this.description$ = this.ngMaintainerService.getDescription();
  }
}
