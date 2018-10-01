import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodcontrolComponent } from './goodcontrol.component';

describe('GoodcontrolComponent', () => {
  let component: GoodcontrolComponent;
  let fixture: ComponentFixture<GoodcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
