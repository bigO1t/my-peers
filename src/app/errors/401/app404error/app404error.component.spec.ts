import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App404errorComponent } from './app404error.component';

describe('App404errorComponent', () => {
  let component: App404errorComponent;
  let fixture: ComponentFixture<App404errorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App404errorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App404errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
