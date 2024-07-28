import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Meal } from 'src/app/models/Meal';
import { MealService } from 'src/app/services/Meal.service';
import { PlanService } from 'src/app/services/Plan.service';
@Component({
  selector: 'app-add-meal-plan',
  templateUrl: './add-meal-plan.component.html',
  styleUrls: ['./add-meal-plan.component.scss'],
})
export class AddMealPlanComponent implements OnInit {

  constructor(
    private mealService: MealService,
    private planService: PlanService,
    private fb: FormBuilder
  ) {
    this.mealService.getMeals().subscribe( (meals: Meal[]) => {
      this.meals = meals;
      console.log(this.meals)
    } )
   
  }

  meals!: Meal[];

  fileName: string = 'No file chosen';
  selectedDay: Number = 1;
  test: String = "";
  planForm!: FormGroup;
  photo!: File;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      // Optionally handle the selected file here
    } else {
      this.fileName = 'No file chosen';
    }
  
  }

  daySelect() {
    console.log(this.selectedDay);

  }

  //days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days = [
    {
      name: 'Monday',
      value: 1,
    },
    {
      name: 'Tuesday',
      value: 2,
    },
    {
      name: 'Wednesday',
      value: 3,
    },
    {
      name: 'Thursday',
      value: 4,
    },
    {
      name: 'Friday',
      value: 5,
    },
    {
      name: 'Saturday',
      value: 30,
    },
    {
      name: 'Sunday',
      value: 7,
    },
  ];

  itemFormGroup = new FormGroup({
    selectedDay: new FormControl(''),
  });

  trackByValue(index: number, item: any): any {
    return item.value;
  }

  OnProductSubmit() {
        console.log(this.planForm.value);
        console.log(this.test + " helloooooo");
    }

  onFileChange(event: Event): void {
    console.log('debug');
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.photo = file;
    }
  }
  ngOnInit(): void {

    
   

    this.planForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      photo: new FormControl(''),
      daySelect: new FormControl(),
      category: new FormControl(),
      meals: new FormBuilder().array([]),
    });

    this.initDays();
  }

  initDays() {
    const daysArray = this.planForm.get('meals') as FormArray;

    for (let i = 0; i < 10; i++) {
      daysArray.push(this.fb.group({
        day: [i + 1], // day is 1 to 7
        breakfast: [null],
        lunch: [null],
        dinner: [null]
      }));
    }
  }
}
