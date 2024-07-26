import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
    daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    currentDayIndex: number = 0;
    displayDays: string[] = [];
  
    meals: { [key: string]: string[] } = {
      'Monday': ['Breakfast', 'Lunch', 'Dinner'],
      'Tuesday': ['Breakfast', 'Lunch', 'Dinner'],
      'Wednesday': ['Breakfast', 'Lunch', 'Dinner'],
      'Thursday': ['Breakfast', 'Lunch', 'Dinner'],
      'Friday': ['Breakfast', 'Lunch', 'Dinner'],
      'Saturday': ['Breakfast', 'Lunch', 'Dinner'],
      'Sunday': ['Breakfast', 'Lunch', 'Dinner']
    };
  
    ngOnInit() {
      this.updateDisplayDays();
    }
  
    updateDisplayDays() {
      this.displayDays = [
        this.daysOfWeek[(this.currentDayIndex - 1 + this.daysOfWeek.length) % this.daysOfWeek.length],
        this.daysOfWeek[this.currentDayIndex],
        this.daysOfWeek[(this.currentDayIndex + 1) % this.daysOfWeek.length]
      ];
    }
  
    next(): void {
      this.currentDayIndex = (this.currentDayIndex + 1) % this.daysOfWeek.length;
      this.updateDisplayDays();
    }
  
    previous(): void {
      this.currentDayIndex = (this.currentDayIndex - 1 + this.daysOfWeek.length) % this.daysOfWeek.length;
      this.updateDisplayDays();
    }

}
