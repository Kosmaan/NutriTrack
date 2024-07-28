import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';
import { MealPlan } from 'src/app/models/MealPlan';

@Component({
  selector: 'app-overview-item-plan',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponentPlan {
@Input() plan !:MealPlan;

}
