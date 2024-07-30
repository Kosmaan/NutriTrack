import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {
  @Input() meal!: Meal;

  @Input() title: String = '';        
  @Input() description: String = '';
  @Input() photo: String = '';
}
