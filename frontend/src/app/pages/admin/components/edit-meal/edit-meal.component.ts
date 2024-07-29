import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Meal } from 'src/app/models/Meal';
import { MealService } from 'src/app/services/Meal.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss'],
})
export class EditMealComponent implements OnInit{
addProductForm!: FormGroup<any>; 
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
OnProductSubmit() {
throw new Error('Method not implemented.');
}
  fileName: string = 'No file chosen';
  meals: Meal[] = [];
  constructor(private mealService : MealService){}
  ngOnInit(): void {
    this.mealService.getMeals().subscribe( (result : Meal[]) =>
    {
      this.meals = result;
      console.log(this.meals);
    } )
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      // Optionally handle the selected file here
    } else {
      this.fileName = 'No file chosen';
    }
  }

  onRemoveClick(): void {
    const confirmed = window.confirm(
      'Do you really want to remove this item? This action cannot be undone.'
    );
  }
}
