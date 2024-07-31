import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MealPlan } from '../models/MealPlan';
import { Observable } from 'rxjs';
import { Meal } from '../models/Meal';
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

  getMealById(id: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.url}/GetMealById?id=${id}`);
  }

  getMealPlanById(id: string): Observable<MealPlan> {
    const params = new HttpParams().set('id', id);
    return this.http.get<MealPlan>(`${this.url}/GetMealPlanById`, { params });
  }

  deletePlan(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/DeleteMealPlanById?id=${id}`);
  }

  updateMeal(id: string, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.url}/UpdateMeal/${id}`, formData);
  }
}
