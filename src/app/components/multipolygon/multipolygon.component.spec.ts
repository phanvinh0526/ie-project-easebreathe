import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipolygonComponent } from './multipolygon.component';

describe('MultipolygonComponent', () => {
  let component: MultipolygonComponent;
  let fixture: ComponentFixture<MultipolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
