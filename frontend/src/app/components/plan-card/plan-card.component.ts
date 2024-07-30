import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {
  @Input() plan : MealPlan = {
    description: "undefined",
    title: "undefined",
    photo: "undefined",
    meals: [],
    meal_Plan_Id: "undefined"
  }

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/dashboard/meal-plan-details', this.plan.meal_Plan_Id]);
  }
}
