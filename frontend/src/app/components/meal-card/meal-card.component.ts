import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {
  //@Input() meal !:Meal;
  meal: Meal = {
    title: 'piept de pui condimentat',
    description: 'piept de pui tras la tigaie cu condimente diverse si sos de rosii, cu legume mexicane',
    protein: 34,
    fats: 12,
    carbs: 23,
    calories: 2556,
    id: "1",
    photo: null,
    file: null,
    category: 1
  };
}
