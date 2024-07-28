import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MealService } from 'src/app/services/Meal.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent implements OnInit {

  addProductForm!: FormGroup<any>;
  formData = new FormData;
  constructor(private mealService : MealService) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photo: new FormControl(null),
      calories: new FormControl(0, [Validators.required, Validators.min(0)]),
      protein: new FormControl(0, [Validators.required, Validators.min(0)]),
      carbs: new FormControl(0, [Validators.required, Validators.min(0)]),
      fats: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }


  onFileChange(event: Event) : void  {
    console.log("debug");
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formData.set('file', file, file.name);
    }
    }
  OnProductSubmit() {
    if (this.addProductForm.valid) {
      

      /*const photoFile = (
        document.querySelector('input[type="file"]') as HTMLInputElement).files?.[0];
      if (photoFile) {
        formData.append('photo', photoFile);
      }*/
      //console.log(this.addProductForm.value);
      console.log(this.addProductForm.value);
      this.formData.append('Title', this.addProductForm.get('title')?.value);
      this.formData.append('Category', this.addProductForm.get('category')?.value);
      this.formData.append('Description', this.addProductForm.get('description')?.value);
      this.formData.append('Calories', this.addProductForm.get('calories')?.value);
      this.formData.append('Protein', this.addProductForm.get('protein')?.value);
      this.formData.append('Carbo', this.addProductForm.get('carbo')?.value);
      this.formData.append('Fats', this.addProductForm.get('fats')?.value);

   
      
      this.mealService.addMeal(this.addProductForm.value).subscribe((res: any) => console.log(res))
    }
    
    return 0;
  }
}
