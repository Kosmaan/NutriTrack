import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/Plan.service';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-meal-plans-page',
  templateUrl: './meal-plans-page.component.html',
  styleUrls: ['./meal-plans-page.component.scss']
})
export class MealPlansPageComponent implements OnInit {
  mealPlans: MealPlan[] = [];

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.loadMealPlans();
  }

  loadMealPlans(): void {
    this.planService.getMeals().subscribe(
      (data: MealPlan[]) => {
        this.mealPlans = data;
      },
      (error) => {
        console.error('Error fetching meal plans:', error);
      }
    );
  }
}
