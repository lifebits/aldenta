import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSubNavigatorComponent } from './services-sub-navigator.component';

describe('ServicesSubNavigatorComponent', () => {
  let component: ServicesSubNavigatorComponent;
  let fixture: ComponentFixture<ServicesSubNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSubNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSubNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
