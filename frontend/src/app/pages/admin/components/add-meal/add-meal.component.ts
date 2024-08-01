import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/Meal.service';
import { ToastService } from 'src/app/services/toast.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent implements OnInit {
  addProductForm!: FormGroup<any>;
  formData = new FormData();
  photo!: File;
  constructor(
    private mealService: MealService,
    private toastService: ToastService,
    private router: Router
  ) {}

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

  onFileChange(event: Event): void {
    console.log('debug');
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.photo = file;
    }
  }
  OnProductSubmit() {
    if (this.addProductForm.valid) {
      console.log(this.addProductForm.value);
      this.formData.append('Title', this.addProductForm.get('name')?.value);
      this.formData.append(
        'Category',
        this.addProductForm.get('category')?.value
      );
      this.formData.append(
        'Description',
        this.addProductForm.get('description')?.value
      );
      this.formData.append(
        'Calories',
        this.addProductForm.get('calories')?.value
      );
      this.formData.append(
        'Protein',
        this.addProductForm.get('protein')?.value
      );
      this.formData.append('Carbs', this.addProductForm.get('carbs')?.value);
      this.formData.append('Fats', this.addProductForm.get('fats')?.value);
      this.formData.append('File', this.photo);
      this.formData.append('Photo', 's');

      this.mealService
        .addMeal(this.formData)
        .subscribe((res: any) => console.log(res));

      this.router.navigate(['/admin/overview']).then(() => {
        window.location.reload();
      });
      this.toastService.show('Form submitted successfully!', 'success');
    } else {
      this.toastService.show('Please complete all required fields.', 'error');
      console.log('Invalid form');
    }

    return 0;
  }
}
