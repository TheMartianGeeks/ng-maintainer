import { TestBed } from '@angular/core/testing';

import { NgMaintenerService } from './ng-maintener.service';

describe('NgMaintenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMaintenerService = TestBed.get(NgMaintenerService);
    expect(service).toBeTruthy();
  });
});
