import { Component, Input } from '@angular/core';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-plan-stats',
  templateUrl: './plan-stats.component.html',
  styleUrls: ['./plan-stats.component.scss']
})
export class PlanStatsComponent {
  @Input() plan !:MealPlan;
}
