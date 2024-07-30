import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStatsComponent } from './plan-stats.component';

describe('PlanStatsComponent', () => {
  let component: PlanStatsComponent;
  let fixture: ComponentFixture<PlanStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanStatsComponent]
    });
    fixture = TestBed.createComponent(PlanStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
