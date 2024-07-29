import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminNavbarModule } from './components/admin-navbar/admin-navbar.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Router, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AddComponent } from './components/add/add.component';
import { SelectorComponent } from './components/selector/selector.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { EditComponent } from './components/edit/edit.component';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { AddMealPlanComponent } from './components/add-meal-plan/add-meal-plan.component';
import { CommonModule } from '@angular/common';
import { OverviewItemComponentMeal } from './components/overview/overview-item-meal/overview-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayComponent } from './components/add-meal-plan/day/day.component';
import { MatSelectModule } from '@angular/material/select';

import { MealPlansPageModule } from '../meal-plans-page/meal-plans-page.module';
import { MealCardComponent } from 'src/app/components/meal-card/meal-card.component';
import { PlanCardComponent } from 'src/app/components/plan-card/plan-card.component';
import { SharedModule } from 'src/app/components/shared.module';
import { OverviewItemComponentPlan } from './components/overview/overview-item-plan/overview-item.component';


@NgModule({
  declarations: [
    AdminComponent,
    OverviewComponent,
    AddComponent,
    SelectorComponent,
    AddMealComponent,
    EditComponent,
    EditMealComponent,
    AddMealPlanComponent,
    OverviewItemComponent,
    DayComponent,
    OverviewItemComponentPlan,
    OverviewItemComponentMeal,
    DayComponent,
    

  ],
  imports: [
    AdminNavbarModule,
    LayoutModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],

    MealPlansPageModule,
    SharedModule,
  ],
  exports: [SharedModule],
})
export class AdminModule {}
