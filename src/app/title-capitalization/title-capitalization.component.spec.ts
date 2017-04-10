/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitleCapitalizationComponent } from './title-capitalization.component';

describe('TitleCapitalizationComponent', () => {
  let component: TitleCapitalizationComponent;
  let fixture: ComponentFixture<TitleCapitalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCapitalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCapitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
