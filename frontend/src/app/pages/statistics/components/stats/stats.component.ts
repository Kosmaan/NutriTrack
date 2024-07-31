import { Component,Output,EventEmitter, Input } from '@angular/core';
import { DayProgress } from 'src/app/models/DayProgress';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent {
  @Output() moreClicked = new EventEmitter<void>();

  kcal: number=0;
  maxkcal: number=2200;
  protein: number=0;
  maxprotein: number=30;
  carbs: number=0;
  maxcarbs: number=30;
  fats: number=0;
  maxfats: number=30;
  @Input() progress: DayProgress = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    proteinMax: 0,
    caloriesMax: 0,
    carbsMax: 0,
    fatsMax: 0
  };
  value: number = (this.progress.calories/this.progress.caloriesMax)*100; 
  getStrokeDashOffset(): number {
    this.value = (this.progress.calories/this.progress.caloriesMax)*100; 
    this.value = Number.parseInt(this.value.toString());
    const circumference = 2 * Math.PI * 30; 
    const offset = circumference - (this.value / 100) * circumference;
    return offset;
  }

  onMoreClick(): void {
    this.moreClicked.emit();
  }
}
