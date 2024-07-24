import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminNavbarModule } from './components/admin-navbar/admin-navbar.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Router, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AddComponent } from './components/add/add.component';
import { SelectorComponent } from './components/selector/selector.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';

@NgModule({
  declarations: [AdminComponent, OverviewComponent, AddComponent, SelectorComponent, AddMealComponent,
  ],
  imports: [AdminNavbarModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [],
})
export class AdminModule {}
