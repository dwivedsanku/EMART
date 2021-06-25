import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLandingPageComponent } from './buyer-landing-page.component';

describe('BuyerLandingPageComponent', () => {
  let component: BuyerLandingPageComponent;
  let fixture: ComponentFixture<BuyerLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
