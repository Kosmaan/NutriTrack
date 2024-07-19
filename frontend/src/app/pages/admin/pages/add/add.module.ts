import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AddModule { }
