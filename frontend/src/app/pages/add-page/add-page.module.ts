import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPageComponent } from './add-page.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMealComponent } from './components/add-meal/add-meal.component';

const COMPONENTS: any[] = [
  AdminNavbarComponent,
  CategorySelectorComponent,
  AddMealComponent,
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  exports: [COMPONENTS],
  providers: [],
  bootstrap: [AddPageComponent],
})
export class AddPageModule {}
