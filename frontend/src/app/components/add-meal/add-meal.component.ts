import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MealService } from 'src/app/services/Meal.service';
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent implements OnInit {
  addProductForm!: FormGroup<any>;

  constructor(private mealService : MealService) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photo: new FormControl(null),
      calories: new FormControl(0, [Validators.required, Validators.min(0)]),
      protein: new FormControl(0, [Validators.required, Validators.min(0)]),
      carbo: new FormControl(0, [Validators.required, Validators.min(0)]),
      fats: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  OnProductSubmit() {
    if (this.addProductForm.valid) {
      

      /*const photoFile = (
        document.querySelector('input[type="file"]') as HTMLInputElement).files?.[0];
      if (photoFile) {
        formData.append('photo', photoFile);
      }*/
      //console.log(this.addProductForm.value);
      this.mealService.addMeal(this.addProductForm.value).subscribe((res: any) => console.log(res))
    }
    
    return 0;
  }
}
