import { Component, Input } from '@angular/core';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-plan-banner',
  templateUrl: './plan-banner.component.html',
  styleUrls: ['./plan-banner.component.scss']
})
export class PlanBannerComponent {
  @Input() plan !:MealPlan;
}
