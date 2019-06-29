import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaintenerComponent } from './ng-maintener.component';

describe('NgMaintenerComponent', () => {
  let component: NgMaintenerComponent;
  let fixture: ComponentFixture<NgMaintenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaintenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaintenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
