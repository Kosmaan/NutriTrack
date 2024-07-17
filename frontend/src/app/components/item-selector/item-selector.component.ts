import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
})
export class ItemSelectorComponent {
  items = ['Item1', 'Item2', 'Item3', 'Item4'];

  itemFormGroup = new FormGroup({
    selectedOption: new FormControl(''),
  });

  showMeal(): boolean {
    return !!this.itemFormGroup.get('selectedOption')?.value;
  }
}
