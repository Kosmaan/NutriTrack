import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlansPageComponent } from './meal-plans-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS: any[] = [
  MealPlansPageComponent,
  FiltersComponent,
  MealCardComponent,
  SearchBarComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ScrollingModule, ReactiveFormsModule],
  exports: [COMPONENTS],
})
export class MealPlansPageModule {}
