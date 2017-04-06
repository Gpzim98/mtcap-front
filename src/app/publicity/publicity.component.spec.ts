/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicityComponent } from './publicity.component';

describe('PublicityComponent', () => {
  let component: PublicityComponent;
  let fixture: ComponentFixture<PublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
