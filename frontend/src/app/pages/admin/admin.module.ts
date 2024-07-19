import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { SelectorModule } from './components/selector/selector.module';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddMealComponent,
    AdminNavbarComponent,
  ],
  imports: [
    CommonModule,
    SelectorModule, // Ensure SelectorModule is imported
    RouterModule,
  ]
})
export class AdminModule { }
