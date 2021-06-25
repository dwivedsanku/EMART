import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveSubcategoryComponent } from './add-remove-subcategory.component';

describe('AddRemoveSubcategoryComponent', () => {
  let component: AddRemoveSubcategoryComponent;
  let fixture: ComponentFixture<AddRemoveSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
