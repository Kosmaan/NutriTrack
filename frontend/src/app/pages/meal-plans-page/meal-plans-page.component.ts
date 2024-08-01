import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/Plan.service';
import { MealPlan } from 'src/app/models/MealPlan';
import { Category } from 'src/app/models/Category';
import { MealService } from 'src/app/services/Meal.service'; // Import the MealService

@Component({
  selector: 'app-meal-plans-page',
  templateUrl: './meal-plans-page.component.html',
  styleUrls: ['./meal-plans-page.component.scss'],
})
export class MealPlansPageComponent implements OnInit {
  mealPlans: MealPlan[] = [];
  filteredMealPlans: MealPlan[] = [];
  categories: { [key: string]: string[] } = {};

  constructor(
    private planService: PlanService,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.loadMealPlans();
  }

  loadMealPlans(): void {
    this.planService.getMeals().subscribe(
      (data: MealPlan[]) => {
        this.mealPlans = data;
        this.filteredMealPlans = data; // Initialize filteredMealPlans
        this.loadCategoriesForMealPlans(); // Load categories for the meal plans
      },
      (error) => {
        console.error('Error fetching meal plans:', error);
      }
    );
  }

  loadCategoriesForMealPlans(): void {
    this.mealPlans.forEach((plan) => {
      this.planService.getPlanCategories(plan.meal_Plan_Id).subscribe(
        (data: Category[]) => {
          this.categories[plan.meal_Plan_Id as string] = data.map(
            (c) => c.category_String
          );
        },
        (error: any) => {
          console.error(
            `Error fetching categories for meal plan ${plan.meal_Plan_Id}:`,
            error
          );
        }
      );
    });
  }

  search(input: string): void {
    this.filteredMealPlans = this.mealPlans.filter((plan) =>
      plan.title.toLowerCase().includes(input.toLowerCase())
    );
  }

  filterByCategory(category: string): void {
    this.filteredMealPlans = this.mealPlans.filter((plan) =>
      this.categories[plan.meal_Plan_Id as string]?.includes(category)
    );
  }
}
