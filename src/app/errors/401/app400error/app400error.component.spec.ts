import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App400errorComponent } from './app400error.component';

describe('App400errorComponent', () => {
  let component: App400errorComponent;
  let fixture: ComponentFixture<App400errorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App400errorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App400errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
