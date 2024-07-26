import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailsComponent } from './plan-details.component';

describe('PlanDetailsComponent', () => {
  let component: PlanDetailsComponent;
  let fixture: ComponentFixture<PlanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanDetailsComponent]
    });
    fixture = TestBed.createComponent(PlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
