/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InliveComponent } from './inlive.component';

describe('InliveComponent', () => {
  let component: InliveComponent;
  let fixture: ComponentFixture<InliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
