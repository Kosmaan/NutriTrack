import { Injectable } from '@angular/core';
import { Meal } from '../models/Meal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MealService {
  url = 'https://localhost:7154/Meal';
  constructor(private http : HttpClient) {}


  addMeal(meal : Meal) 
  {
    return this.http.post<Meal>(this.url + "/AddMeal",meal);
  }

  getMeals()
  {
    return this.http.get<Meal[]>(this.url)
  }

  
}
