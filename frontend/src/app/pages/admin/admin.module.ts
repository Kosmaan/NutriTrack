import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ComponentsModule } from './components/components.module';
import { OverviewComponent } from './pages/overview/overview.component';


@NgModule({
  declarations: [
    AdminComponent,
    OverviewComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class AdminModule { }
