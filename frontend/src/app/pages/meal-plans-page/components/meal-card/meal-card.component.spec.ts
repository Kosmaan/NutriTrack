import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCardComponent } from './meal-card.component';

describe('MealCardComponent', () => {
  let component: MealCardComponent;
  let fixture: ComponentFixture<MealCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealCardComponent]
    });
    fixture = TestBed.createComponent(MealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
