import { Component, Input } from '@angular/core';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {
  //@Input() Plan !: MealPlanDTO;
  plan : MealPlan = {
    description: "undefined",
    title: "undefined",
    photo: "undefined",
    meals: []
  }
}
