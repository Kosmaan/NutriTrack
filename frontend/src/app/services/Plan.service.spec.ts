/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanService } from './Plan.service';

describe('Service: Plan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanService]
    });
  });

  it('should ...', inject([PlanService], (service: PlanService) => {
    expect(service).toBeTruthy();
  }));
});
