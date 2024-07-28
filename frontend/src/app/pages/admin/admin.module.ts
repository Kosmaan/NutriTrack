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
import { OverviewItemComponent } from './components/overview-item/overview-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayComponent } from './components/add-meal-plan/day/day.component';

@NgModule({
  declarations: [AdminComponent, OverviewComponent, AddComponent, SelectorComponent, AddMealComponent, EditComponent, EditMealComponent, AddMealPlanComponent, OverviewItemComponent, DayComponent,
  ],
  imports: [AdminNavbarModule,
    LayoutModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [],
  
})
export class AdminModule {}
