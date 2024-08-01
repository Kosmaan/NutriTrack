import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/Plan.service';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-meal-plans-page',
  templateUrl: './meal-plans-page.component.html',
  styleUrls: ['./meal-plans-page.component.scss'],
})
export class MealPlansPageComponent implements OnInit {
  mealPlans: MealPlan[] = [];
  filteredMealPlans: MealPlan[] = [];

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.loadMealPlans();
  }

  loadMealPlans(): void {
    this.planService.getMeals().subscribe(
      (data: MealPlan[]) => {
        this.mealPlans = data;
        this.filteredMealPlans = data; // Initialize filteredMealPlans
      },
      (error) => {
        console.error('Error fetching meal plans:', error);
      }
    );
  }

  search(input: string): void {
    this.filteredMealPlans = this.mealPlans.filter((plan) =>
      plan.title.toLowerCase().includes(input.toLowerCase())
    );
  }
}
