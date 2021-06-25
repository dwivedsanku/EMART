import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOrUnblockSellerComponent } from './block-or-unblock-seller.component';

describe('BlockOrUnblockSellerComponent', () => {
  let component: BlockOrUnblockSellerComponent;
  let fixture: ComponentFixture<BlockOrUnblockSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockOrUnblockSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOrUnblockSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
