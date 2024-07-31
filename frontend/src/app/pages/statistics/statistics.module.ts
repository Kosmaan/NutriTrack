import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatsComponent } from './components/stats/stats.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MealCardStatsComponent } from './components/meal-card-stats/meal-card-stats.component';
import { ProgressComponent } from './components/progress/progress.component';
import { HintsItemComponent } from './components/hints-item/hints-item.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckbox } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
const COMPONENTS: any[] = [
  StatisticsComponent,
  StatsComponent,
  CalendarComponent,
  MealCardStatsComponent,
  ProgressComponent,
  HintsItemComponent,
 
];
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [],
  imports: [
    MatProgressSpinnerModule, 
    CommonModule, 
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  bootstrap: [StatisticsComponent],
})
export class StatisticsModule {}
