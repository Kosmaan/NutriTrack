import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AddMealComponent,
    AdminNavbarComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddMealComponent,
    AdminNavbarComponent,
    SelectorComponent
  ]
})
export class ComponentsModule { }
