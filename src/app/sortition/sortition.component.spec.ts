/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SortitionComponent } from './sortition.component';

describe('SortitionComponent', () => {
  let component: SortitionComponent;
  let fixture: ComponentFixture<SortitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
