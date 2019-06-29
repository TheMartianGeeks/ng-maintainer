import { TestBed } from '@angular/core/testing';

import { NgMaintainerService } from './ng-maintainer.service';

describe('NgMaintainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMaintainerService = TestBed.get(NgMaintainerService);
    expect(service).toBeTruthy();
  });
});
