// plan-days.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/app/services/Plan.service';
import { DayDTO } from 'src/app/models/DayDTO';
import { Meal } from 'src/app/models/Meal'; // Ensure Meal model matches API response

@Component({
  selector: 'app-plan-days',
  templateUrl: './plan-days.component.html',
  styleUrls: ['./plan-days.component.scss']
})
export class PlanDaysComponent implements OnInit {
  plan!: any; // Adjust as needed
  meals: DayDTO[] = [];
  mealDetails: { [key: string]: Meal } = {};
  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
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
      data => {
        console.log('Fetched Meal Plan Data:', data);
        this.plan = data;
        this.meals = data.meals.map((meal: any) => ({
          ...meal,
          day: meal.day as number, // Ensure day is treated as number
          breakfast: meal.breakfast as string, // Ensure IDs are treated as string
          lunch: meal.lunch as string,
          dinner: meal.dinner as string
        }));

        // Fetch meal details for each meal ID
      },
      error => {
        console.error('Error fetching meal plan:', error);
      }
    );
  }




  getDayName(dayNumber: number): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayNumber - 1]; // Convert to 0-based index
  }

  getMealName(mealId: string): string {
    const meal = this.mealDetails[mealId];
    return meal ? meal.title : 'Unknown'; // Adjust according to your meal model
}

}
