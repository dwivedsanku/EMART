import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOrUnblockBuyerComponent } from './block-or-unblock-buyer.component';

describe('BlockOrUnblockBuyerComponent', () => {
  let component: BlockOrUnblockBuyerComponent;
  let fixture: ComponentFixture<BlockOrUnblockBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockOrUnblockBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOrUnblockBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
