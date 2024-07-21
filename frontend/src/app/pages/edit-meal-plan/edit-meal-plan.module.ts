import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMealbuttonComponent } from './components/edit-mealbutton/edit-mealbutton.component';
import { SelectCategComponent } from './components/select-categ/select-categ.component';
import { EditMealPlanComponent } from './edit-meal-plan.component';


const COMPONENTS: any[] = [
  EditMealbuttonComponent,
  SelectCategComponent,
];
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [],
  bootstrap: [EditMealPlanComponent],
})
export class EditMealPlanModule { }
