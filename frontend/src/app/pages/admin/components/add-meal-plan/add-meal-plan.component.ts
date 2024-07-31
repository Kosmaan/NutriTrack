import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/Meal';
import { MealPlanDTO } from 'src/app/models/MealPlanDTO';
import { MealService } from 'src/app/services/Meal.service';
import { PlanService } from 'src/app/services/Plan.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-add-meal-plan',
  templateUrl: './add-meal-plan.component.html',
  styleUrls: ['./add-meal-plan.component.scss'],
})
export class AddMealPlanComponent implements OnInit {

  constructor(
    private mealService: MealService,
    private planService: PlanService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router, 
  ) {
    this.mealService.getMeals().subscribe( (meals: Meal[]) => {
      this.meals = meals;
      console.log(this.meals)
    } )
    this.plan = {description : "", title: "", photo: this.photo, meals: []};
  }

  meals!: Meal[];
  plan!: MealPlanDTO;
  formData!: FormData
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
      value: 6,
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
        if(this.planForm.invalid){
          this.toastService.show('Please complete all required fields.', 'error');
          console.log('Invalid Form');
        }

        console.log(this.planForm.value);
        this.plan.description = this.planForm.get("description")?.value;
        this.plan.title = this.planForm.get("name")?.value;
        this.plan.photo = this.photo;
        this.plan.meals = this.planForm.get("meals")?.value;
        
        console.log(this.plan);


        this.formData.append('Title',this.planForm.get("name")?.value);
        this.formData.append('Description',this.planForm.get("description")?.value);
        this.formData.append('Photo',this.photo);

      for(let index in this.plan.meals)
        {
         console.log(index);
       console.log(this.plan.meals[0]);
        this.formData.append(`Meals[${index}].Day` ,this.plan.meals[index].day.toString());
        this.formData.append(`Meals[${index}].breakfast` ,this.plan.meals[index].breakfast.toString());
        this.formData.append(`Meals[${index}].lunch` ,this.plan.meals[index].lunch.toString());
        this.formData.append(`Meals[${index}].dinner` ,this.plan.meals[index].dinner.toString());
        }
       

        this.planService.addMeal(this.formData).subscribe( (response: any) => {
          this.router.navigate(['/admin/overview']).then(() => {
            window.location.reload();
          });
          this.toastService.show('Form submitted successfully!', 'success');
          console.log(response)
        } )
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

    
   this.formData = new FormData 

    this.planForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
      daySelect: new FormControl(),
      category: new FormControl([Validators.required]),
      meals: new FormBuilder().array([]),
    });

    this.initDays();
  }

  initDays() {
    const daysArray = this.planForm.get('meals') as FormArray;

    for (let i = 0; i < 7; i++) {
      daysArray.push(this.fb.group({
        day: [i + 1], // day is 1 to 7
        breakfast: [null],
        lunch: [null],
        dinner: [null]
      }));
    }
  }
}
