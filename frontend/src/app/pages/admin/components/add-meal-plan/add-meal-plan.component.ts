import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-meal-plan',
  templateUrl: './add-meal-plan.component.html',
  styleUrls: ['./add-meal-plan.component.scss']
})
export class AddMealPlanComponent implements OnInit{
  fileName: string = "No file chosen";
  selectedDay: number = 0;

  dayForm !: FormGroup;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      // Optionally handle the selected file here
    } else {
      this.fileName = "No file chosen";
    }
  }

  //days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  day = [ {
    name: 'Monday',
    value: 1
  },]

  itemFormGroup = new FormGroup({
    selectedDay: new FormControl(''),
  });


  ngOnInit(): void {
      this.dayForm = new FormGroup({
        monday: new FormControl('Monday'),
        tuesday: new FormControl('Tuesday'),
        wednesday: new FormControl('Wednesday'),
        thursday: new FormControl('Thursday'),
        friday: new FormControl('Friday'),
        saturday: new FormControl('Saturday'),
        sunday: new FormControl('Sunday'),
      })
  }
}
