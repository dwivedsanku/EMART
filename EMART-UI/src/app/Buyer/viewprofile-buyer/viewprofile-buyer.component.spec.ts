import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofileBuyerComponent } from './viewprofile-buyer.component';

describe('ViewprofileBuyerComponent', () => {
  let component: ViewprofileBuyerComponent;
  let fixture: ComponentFixture<ViewprofileBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprofileBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofileBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
