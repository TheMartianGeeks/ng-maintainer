import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaintainerComponent } from './ng-maintainer.component';

describe('NgMaintainerComponent', () => {
  let component: NgMaintainerComponent;
  let fixture: ComponentFixture<NgMaintainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaintainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
