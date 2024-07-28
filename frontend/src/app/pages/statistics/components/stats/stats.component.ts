import { Component,Output,EventEmitter } from '@angular/core';


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
  value: number = (this.kcal/this.maxkcal)*100; 

  getStrokeDashOffset(): number {
    this.value = Number.parseInt(this.value.toString());
    const circumference = 2 * Math.PI * 30; 
    const offset = circumference - (this.value / 100) * circumference;
    return offset;
  }

  onMoreClick(): void {
    this.moreClicked.emit();
  }
}