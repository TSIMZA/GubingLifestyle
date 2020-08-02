import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLightThemeComponent } from './nav-light-theme.component';

describe('NavLightThemeComponent', () => {
  let component: NavLightThemeComponent;
  let fixture: ComponentFixture<NavLightThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLightThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
