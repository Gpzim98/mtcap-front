/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NextSortitionComponent } from './next-sortition.component';

describe('NextSortitionComponent', () => {
  let component: NextSortitionComponent;
  let fixture: ComponentFixture<NextSortitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextSortitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSortitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
