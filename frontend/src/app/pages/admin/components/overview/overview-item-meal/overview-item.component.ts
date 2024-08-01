import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-overview-item-meal',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponentMeal {
@Input() meal !:Meal;
    
};

