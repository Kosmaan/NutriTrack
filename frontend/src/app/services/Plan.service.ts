import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MealPlan } from '../models/MealPlan';
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'https://localhost:7154/MealPlan';
  constructor(private http : HttpClient) {}


  addMeal(plan : FormData) 
  {

    return this.http.post<FormData>(this.url + "/AddMealPlan",plan);
  }

  getMeals()
  {
    return this.http.get<MealPlan[]>(this.url + "/GetAllMealPlans")
  }
}
