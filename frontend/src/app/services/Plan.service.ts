import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MealPlanDTO} from '../models/MealPlanDTO'
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'https://localhost:7154/Plan';
  constructor(private http : HttpClient) {}


  addMeal(plan : MealPlanDTO) 
  {

    return this.http.post<MealPlanDTO>(this.url + "/AddMeal",plan);
  }

  getMeals()
  {
    return this.http.get<MealPlanDTO[]>(this.url)
  }
}
