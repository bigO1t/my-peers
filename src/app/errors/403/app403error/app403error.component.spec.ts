import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App403errorComponent } from './app403error.component';

describe('App403errorComponent', () => {
  let component: App403errorComponent;
  let fixture: ComponentFixture<App403errorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App403errorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App403errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
