import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanDetailsComponent } from './meal-plan-details.component';

describe('MealPlanDetailsComponent', () => {
  let component: MealPlanDetailsComponent;
  let fixture: ComponentFixture<MealPlanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealPlanDetailsComponent]
    });
    fixture = TestBed.createComponent(MealPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
