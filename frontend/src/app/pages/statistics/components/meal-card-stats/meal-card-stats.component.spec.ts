import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCardStatsComponent } from './meal-card-stats.component';

describe('MealCardStatsComponent', () => {
  let component: MealCardStatsComponent;
  let fixture: ComponentFixture<MealCardStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealCardStatsComponent]
    });
    fixture = TestBed.createComponent(MealCardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
