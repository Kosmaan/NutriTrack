import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBannerComponent } from './plan-banner.component';

describe('PlanBannerComponent', () => {
  let component: PlanBannerComponent;
  let fixture: ComponentFixture<PlanBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanBannerComponent]
    });
    fixture = TestBed.createComponent(PlanBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
