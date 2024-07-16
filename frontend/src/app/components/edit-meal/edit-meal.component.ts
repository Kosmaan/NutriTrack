import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent {
addProductForm!: FormGroup<any>;

OnProductSubmit() {
throw new Error('Method not implemented.');
}

}
