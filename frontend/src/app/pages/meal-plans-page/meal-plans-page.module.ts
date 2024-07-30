import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlansPageComponent } from './meal-plans-page.component';
import { FiltersComponent } from './components/filters/filters.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerPlansPageComponent } from './components/banner-plans-page/banner-plans-page.component';
import { SharedModule } from 'src/app/components/shared.module';


const COMPONENTS: any[] = [
  MealPlansPageComponent,
  FiltersComponent,
  
  SearchBarComponent,
];

@NgModule({
  declarations: [COMPONENTS, BannerPlansPageComponent],
  imports: [CommonModule, ScrollingModule, ReactiveFormsModule,SharedModule],
  exports: [COMPONENTS],
})
export class MealPlansPageModule {}
