import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { MealPlan } from 'src/app/models/MealPlan';
import { PlanService } from 'src/app/services/Plan.service';

@Component({
  selector: 'app-plan-stats',
  templateUrl: './plan-stats.component.html',
  styleUrls: ['./plan-stats.component.scss']
})
export class PlanStatsComponent implements OnInit{
  @Input() plan!: MealPlan;
  categories !: Category[];
  constructor(
    private route: ActivatedRoute,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.planService.getPlanCategories(this.plan.meal_Plan_Id).subscribe( res =>
    {
      this.categories = res;
      console.log(this.categories);
    }
    )
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        console.log('Fetching Meal Plan with ID:', id);
        this.planService.getMealPlanById(id).subscribe(
          data => {
            console.log('Fetched Meal Plan Data:', data);
            this.plan = data;
          },
          error => {
            console.error('Error fetching meal plan:', error);
          }
        );
      } else {
        console.error('No ID provided');
      }
    });
  }
}
