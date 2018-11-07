import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App500errorComponent } from './app500error.component';

describe('App500errorComponent', () => {
  let component: App500errorComponent;
  let fixture: ComponentFixture<App500errorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App500errorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App500errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
