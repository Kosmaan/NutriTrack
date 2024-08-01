import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDaysComponent } from './plan-days.component';

describe('PlanDaysComponent', () => {
  let component: PlanDaysComponent;
  let fixture: ComponentFixture<PlanDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanDaysComponent]
    });
    fixture = TestBed.createComponent(PlanDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
