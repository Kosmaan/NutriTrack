import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-meal-plan',
  templateUrl: './edit-meal-plan.component.html',
  styleUrls: ['./edit-meal-plan.component.scss']
})

export class EditMealPlanComponent  {

addProductForm!: FormGroup<any>;
  http: any;

ngOnInit(): void {
  this.addProductForm=new FormGroup({
    title: new FormControl(),
    meals: new FormControl(),
    description: new FormControl()

  })
}

OnProductSubmit() {
  throw new Error('Method not implemented.');
}

}
