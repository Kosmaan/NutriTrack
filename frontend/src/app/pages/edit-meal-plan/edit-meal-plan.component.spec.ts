import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealPlanComponent } from './edit-meal-plan.component';

describe('EditMealPlanComponent', () => {
  let component: EditMealPlanComponent;
  let fixture: ComponentFixture<EditMealPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMealPlanComponent]
    });
    fixture = TestBed.createComponent(EditMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
