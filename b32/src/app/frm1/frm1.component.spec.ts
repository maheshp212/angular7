import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frm1Component } from './frm1.component';

describe('Frm1Component', () => {
  let component: Frm1Component;
  let fixture: ComponentFixture<Frm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
