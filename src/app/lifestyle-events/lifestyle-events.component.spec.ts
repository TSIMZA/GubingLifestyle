import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleEventsComponent } from './lifestyle-events.component';

describe('LifestyleEventsComponent', () => {
  let component: LifestyleEventsComponent;
  let fixture: ComponentFixture<LifestyleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
