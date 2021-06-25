import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveCategoryComponent } from './add-remove-category.component';

describe('AddRemoveCategoryComponent', () => {
  let component: AddRemoveCategoryComponent;
  let fixture: ComponentFixture<AddRemoveCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
