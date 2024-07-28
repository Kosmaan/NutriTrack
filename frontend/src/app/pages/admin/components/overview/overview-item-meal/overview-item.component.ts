import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-overview-item-meal',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponentMeal {
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
