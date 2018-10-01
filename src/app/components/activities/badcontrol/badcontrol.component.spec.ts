import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadcontrolComponent } from './badcontrol.component';

describe('BadcontrolComponent', () => {
  let component: BadcontrolComponent;
  let fixture: ComponentFixture<BadcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
