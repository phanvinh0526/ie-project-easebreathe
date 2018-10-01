import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialcontrolComponent } from './partialcontrol.component';

describe('PartialcontrolComponent', () => {
  let component: PartialcontrolComponent;
  let fixture: ComponentFixture<PartialcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
