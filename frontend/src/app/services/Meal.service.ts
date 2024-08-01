import { Injectable } from '@angular/core';
import { Meal } from '../models/Meal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Category } from '../models/Category';
@Injectable({
  providedIn: 'root',
})
export class MealService {
  url = 'https://localhost:7154/Meal';
  constructor(private http: HttpClient) {}

  addMeal(meal: any) {
    return this.http.post<any>(this.url + '/AddMeal', meal);
  }

  getMeals() {
    return this.http.get<Meal[]>(this.url + '/GetAllMeals');
  }

  getMealById(id: String) {
    return this.http.get<Meal>(this.url + '/GetMealById?id=' + id);
  }

  getAllCategories() {
    return this.http.get<any>(this.url + '/GetAllCategories');
  }
}
