import { Component, OnInit } from '@angular/core';
import { DayChecker } from 'src/app/models/DayChecker';
import { DayProgress } from 'src/app/models/DayProgress';
import { Meal } from 'src/app/models/Meal';
import { MealPlan } from 'src/app/models/MealPlan';
import { AuthService } from 'src/app/services/Auth.service';
import { MealService } from 'src/app/services/Meal.service';
import { PlanService } from 'src/app/services/Plan.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  handleDaysChange(updatedDays: DayChecker[]) {
    this.days = updatedDays;
    console.log(this.days);
    this.updateProgress();
  }

  updateProgress() {
    let calories = 0;
    let protein = 0;
    let fats = 0;
    let carbs = 0;
    if (this.days != null) {
      if (this.days[this.currentDay - 1].breakfast === true) {
        calories += this.breakfast.calories;
        protein += this.breakfast.protein;
        carbs += this.breakfast.carbs;
        fats += this.breakfast.fats;
      }
      if (this.days[this.currentDay - 1].lunch === true) {
        calories += this.lunch.calories;
        protein += this.lunch.protein;
        carbs += this.lunch.carbs;
        fats += this.lunch.fats;
      }
      if (this.days[this.currentDay - 1].dinner === true) {
        calories += this.dinner.calories;
        protein += this.dinner.protein;
        carbs += this.dinner.carbs;
        fats += this.dinner.fats;
      }

      this.todayProgress.calories = calories;
      this.todayProgress.carbs = carbs;
      this.todayProgress.fats = fats;
      this.todayProgress.protein = protein;

      this.todayProgress.caloriesMax =
        this.breakfast.calories + this.lunch.calories + this.dinner.calories;
      this.todayProgress.proteinMax =
        this.breakfast.protein + this.lunch.protein + this.dinner.protein;
      this.todayProgress.fatsMax =
        this.breakfast.fats + this.lunch.fats + this.dinner.fats;
      this.todayProgress.carbsMax =
        this.breakfast.carbs + this.lunch.carbs + this.dinner.carbs;
    }
  }

  User !: string;
  currentPlan!: String;
  plan!: MealPlan;
  breakfast!: Meal;
  lunch!: Meal;
  dinner!: Meal;
  

  todayProgress: DayProgress = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    proteinMax: 0,
    caloriesMax: 0,
    carbsMax: 0,
    fatsMax: 0,
  };
  days: DayChecker[] = [];
  currentDay!: number;
  constructor(
    private planService: PlanService,
    private mealService: MealService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loadUserData(); 
    this.authService.getUserData().subscribe((res) => {
      this.currentPlan = res.current_Plan;
      this.planService
        .getMealPlanById(this.currentPlan.toString())
        .subscribe((result: MealPlan) => {
          this.plan = result;
          console.log(this.plan);
          let d = new Date();
          this.currentDay = d.getDay();

          console.log(this.currentDay);
          this.mealService
            .getMealById(this.plan.meals[this.currentDay].breakfast.toString())
            .subscribe((result: Meal) => {
              this.breakfast = result;
            });
          this.mealService
            .getMealById(this.plan.meals[this.currentDay].lunch.toString())
            .subscribe((result: Meal) => {
              this.lunch = result;
            });
          this.mealService
            .getMealById(this.plan.meals[this.currentDay].dinner.toString())
            .subscribe((result: Meal) => {
              this.dinner = result;
            });

          this.updateProgress();
        });
    });
  }

  scrollToCalendar(): void {
    const target = document.getElementById('calendarComponent');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  loadUserData(): void {
    const email = localStorage.getItem('userId');
    if (email) {
      this.authService.getUserData().subscribe(
        data => {
          this.User = data.first_Name;
        },
        error => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }

}
