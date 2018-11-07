import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App401errorComponent } from './app401error.component';

describe('App401errorComponent', () => {
  let component: App401errorComponent;
  let fixture: ComponentFixture<App401errorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App401errorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App401errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
