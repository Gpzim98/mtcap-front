/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellingPointComponent } from './selling-point.component';

describe('SellingPointComponent', () => {
  let component: SellingPointComponent;
  let fixture: ComponentFixture<SellingPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
