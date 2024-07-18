import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlansPageComponent } from './meal-plans-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';

const COMPONENTS: any[] = [
  MealPlansPageComponent,
  FiltersComponent,
  MealCardComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class MealPlansPageModule {}
