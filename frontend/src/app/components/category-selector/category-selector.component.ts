import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
})
export class CategorySelectorComponent {
  @Input() titleText: string = 'Default';
  @Input() firstButtonText: string = 'Default';
  @Input() secondButtonText: string = 'Default';

  selectedButton: string = '';

  selectButton(button: string){
    this.selectedButton = button;
  }
}
