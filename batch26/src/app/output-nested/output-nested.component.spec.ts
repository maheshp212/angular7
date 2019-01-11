import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputNestedComponent } from './output-nested.component';

describe('OutputNestedComponent', () => {
  let component: OutputNestedComponent;
  let fixture: ComponentFixture<OutputNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
