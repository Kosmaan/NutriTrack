import { Component, OnInit } from '@angular/core';
import { AdminModule } from '../../admin.module';
import { PlanService } from 'src/app/services/Plan.service';
import { MealService } from 'src/app/services/Meal.service';
import { MealPlan } from 'src/app/models/MealPlan';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
    constructor(private planService: PlanService, private mealService: MealService){}
  plans : MealPlan[] = [];
  meals : Meal[] = [];
  
    ngOnInit(): void {
      this.mealService.getMeals().subscribe( (result : Meal[]) =>
      {
       /* result = result.map(obj => ({
          ...obj,
          photo: obj.photo.replace(/ /g, '%')}));

          result = result.map(obj => ({
            ...obj,
            photo: obj.photo.replace(/\\/g, '/')}));*/

        this.meals = result;
        console.log(this.meals);
      } )

      this.planService.getMeals().subscribe( (result : MealPlan[]) =>
        {
          this.plans = result;
          console.log(this.plans);
        } )

       

          this.meals = this.meals.map(obj => ({
            ...obj,
            photo: obj.photo.replace(/ /g, '%')}));

            
  }


}
