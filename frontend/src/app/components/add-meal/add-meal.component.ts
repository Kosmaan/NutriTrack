import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent {
addProductForm!: FormGroup<any>;

OnProductSubmit() {
throw new Error('Method not implemented.');
}

}
