import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PlanCardComponent } from './plan-card/plan-card.component';
import { MealCardComponent } from './meal-card/meal-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MealCardComponent,PlanCardComponent],
  exports:[MealCardComponent,PlanCardComponent]
})
export class SharedModule { }
