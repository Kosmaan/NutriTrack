import { Injectable } from '@angular/core';
import { Meal } from '../models/Meal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class MealService {
  url = 'https://localhost:7154/Meal';
  constructor(private http : HttpClient) {}


  addMeal(meal : FormData) 
  {

    return this.http.post<Meal>(this.url + "/AddMeal",meal);
  }

  getMeals()
  {
    return this.http.get<Meal[]>(this.url + "/GetAllMeals");
  }

  
}
