import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfListComponent} from './of-list.component';

describe('OfListComponent', () => {
  let component: OfListComponent;
  let fixture: ComponentFixture<OfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
