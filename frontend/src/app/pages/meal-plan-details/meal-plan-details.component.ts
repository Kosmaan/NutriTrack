import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/app/services/Plan.service';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-meal-plan-details',
  templateUrl: './meal-plan-details.component.html',
  styleUrls: ['./meal-plan-details.component.scss']
})
export class MealPlanDetailsComponent implements OnInit {
  plan!: MealPlan;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        console.log('Fetching Meal Plan with ID:', id);
        this.planService.getMealPlanById(id).subscribe(
          data => {
            console.log('Fetched Meal Plan Data:', data);
            this.plan = data;
          },
          error => {
            console.error('Error fetching meal plan:', error);
          }
        );
      } else {
        console.error('No ID provided');
      }
    });
  }
}
