import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DayChecker } from 'src/app/models/DayChecker';
import { MealPlan } from 'src/app/models/MealPlan';
import { MealService } from 'src/app/services/Meal.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit{
    daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    currentDayIndex: number = 0;
    displayDays: DayChecker[] = [];
    @Output() daysChange: EventEmitter<DayChecker[]> = new EventEmitter<DayChecker[]>();
    @Input() plan!: MealPlan;
    days: DayChecker[] = []; 

    
    constructor(private mealService : MealService){}

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
      
      

     if(localStorage.getItem("progress") != null)
     {
        let json = localStorage.getItem("progress");
        if(json != null)
        this.days = JSON.parse(json);
     }
     else
     {
      this.days = [];
      for(let i=0; i <= 7; i++)
        {
          let day :DayChecker = {
            day: this.daysOfWeek[i],
            breakfast: false,
            lunch: false,
            dinner: false
          }
          this.days.push(day);
        }
      }
        this.updateDisplayDays();
        console.log("here||")
        this.daysChange.emit(this.days);
      console.log(this.days);
      console.log(this.displayDays)
    }
  
    updateDisplayDays() {
      this.displayDays = [
        this.days[(this.currentDayIndex - 1 + this.daysOfWeek.length) % this.daysOfWeek.length],
        this.days[this.currentDayIndex],
        this.days[(this.currentDayIndex + 1) % this.daysOfWeek.length]
      ];
     
    }
    
    persistChanges() : void
    {
      this.daysChange.emit(this.days);
      
      localStorage.setItem("progress",JSON.stringify(this.days))
     // console.log(this.days)
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
