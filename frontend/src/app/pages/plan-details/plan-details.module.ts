import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownButtonComponent } from './components/drop-down-button/drop-down-button.component';

const COMPONENTS: any[] = [
  DropDownButtonComponent,
];
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
