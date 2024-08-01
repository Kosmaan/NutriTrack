import { Injectable } from '@angular/core';
import { Meal } from '../models/Meal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MealService {
  url = 'https://localhost:7154/Meal';
  constructor(private http : HttpClient) {}


  addMeal(meal : any) 
  {

    return this.http.post<any>(this.url + "/AddMeal",meal);
  }

  getMeals()
  {
    return this.http.get<Meal[]>(this.url + "/GetAllMeals");
  }
  getMealById(id : String)
  {
    return this.http.get<Meal>(this.url + "/GetMealById?id=" + id);
  }


  updateMeal(formData: FormData){
    return this.http.put<any>(`${this.url}/UpdateMeal`, formData);
  }
  

  deleteMeal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/DeleteMeal?id=${id}`);
  }
  
  getMealById(id: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.url}/GetMealById?id=${id}`);
  }

}
