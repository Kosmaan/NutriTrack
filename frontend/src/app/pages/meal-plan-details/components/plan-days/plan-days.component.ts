import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/app/services/Plan.service';
import { DayDTO } from 'src/app/models/DayDTO';
import { Meal } from 'src/app/models/Meal';
import { MealService } from 'src/app/services/Meal.service';
import { MealPlan } from 'src/app/models/MealPlan';
import { DayWithMeals } from 'src/app/models/DayWithMeals';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-plan-days',
  templateUrl: './plan-days.component.html',
  styleUrls: ['./plan-days.component.scss'],
})
export class PlanDaysComponent implements OnInit {
  plan!: MealPlan;
  meals: DayDTO[] = [];
  mealList: DayWithMeals[] = [];
  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      if (this.id) {
        console.log('Fetching Meal Plan with ID:', this.id);
        this.fetchMealPlan();
      } else {
        console.error('No ID provided');
      }
    });
    
  }

  fetchMealPlan(): void {
    this.planService.getMealPlanById(this.id).subscribe(
      async (data : MealPlan) => {
        console.log('Fetched Meal Plan Data:', data);
        this.plan = data;
        for(let day of this.plan.meals){
          const breakfast = await this.fetchMealById(day.breakfast.toString());
          const lunch = await this.fetchMealById(day.lunch.toString());
          const dinner = await this.fetchMealById(day.dinner.toString());
          this.mealList.push(
            {
              day: day.day,
              breakfast: breakfast,
              lunch: lunch,
              dinner: dinner
            }
          )
        }
        console.log(this.mealList);
      },
      (error) => {
        console.error('Error fetching meal plan:', error);
      }
    );
  }

  async fetchMealById(id: string): Promise<Meal> {
    const meal: Meal = await lastValueFrom(this.mealService.getMealById(id));
    return meal;
  }

  getDayName(dayNumber: number): string {
    const daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return daysOfWeek[dayNumber - 1];
  }

}
