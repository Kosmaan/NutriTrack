import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input()  meals !: Meal[];
  @Input()  planForm !: FormGroup;
  @Input() indexFromParent!: Number;
}
