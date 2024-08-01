import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/Meal';
import { MealService } from 'src/app/services/Meal.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss'],
})
export class EditMealComponent implements OnInit {
  addProductForm!: FormGroup;
  fileName: string = 'No file chosen';
  meals: Meal[] = [];
  currentMealId: string | null = null;
  photo!: File;

  constructor(
    private mealService: MealService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      mealSelector: ['', [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      calories: [0],
      protein: [0],
      carbs: [0],
      fats: [0],
      photo: ['']
    });

    this.mealService.getMeals().subscribe((result: Meal[]) => {
      this.meals = result;
    });

    this.addProductForm.get('mealSelector')?.valueChanges.subscribe(mealId => {
      if (mealId) {
        this.currentMealId = mealId;
        this.loadMealDetails(mealId);
      } else {
        this.addProductForm.reset();
        this.currentMealId = null;
      }
    });
  }

  loadMealDetails(mealId: string): void {
    this.mealService.getMealById(mealId).subscribe(meal => {
      this.addProductForm.patchValue({
        name: meal.title,
        category: meal.category.toString()  ,
        description: meal.description,
        calories: meal.calories,
        protein: meal.protein,
        carbs: meal.carbs,
        fats: meal.fats
      });
      
      this.fileName = meal.photo || 'No file chosen';
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      this.photo = input.files[0];
    } else {
      this.fileName = 'No file chosen';
    }
  }

  OnProductSubmit(): void {
    if (this.addProductForm.valid && this.currentMealId) {
      const formData = new FormData();
      formData.append("id",this.currentMealId);
      formData.append('Title', this.addProductForm.get('name')?.value);
      formData.append('Description', this.addProductForm.get('description')?.value);
      formData.append('Category', this.addProductForm.get('category')?.value);
      formData.append('Calories', this.addProductForm.get('calories')?.value);
      formData.append('Protein', this.addProductForm.get('protein')?.value);
      formData.append('Carbs', this.addProductForm.get('carbs')?.value);
      formData.append('Fats', this.addProductForm.get('fats')?.value);
      formData.append('Photo', "x");

      if (this.photo) {
        formData.append('file', this.photo);
      }

      
      this.mealService.updateMeal(formData).subscribe(
        (response ) => {
        console.log(response)
        },
      
      );
    } else {
      console.log('Invalid form or meal ID not set.');
    }
  }

  onDeleteClick(): void {
    if (this.currentMealId) {
      const confirmed = window.confirm('Do you really want to remove this item? This action cannot be undone.');
      if (confirmed) {
        this.mealService.deleteMeal(this.currentMealId).subscribe(
          () => {
            alert('Meal deleted successfully');
            this.router.navigate(['/admin/overview']); // Optionally navigate after deletion
          },
          error => {
            console.error('Error deleting meal:', error);
            alert('Failed to delete meal');
          }
        );
      }
    } else {
      alert('No meal selected for deletion');
    }
  }
}
