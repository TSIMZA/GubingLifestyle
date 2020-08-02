import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDarkThemeComponent } from './nav-dark-theme.component';

describe('NavDarkThemeComponent', () => {
  let component: NavDarkThemeComponent;
  let fixture: ComponentFixture<NavDarkThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDarkThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
