import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
})
export class CategorySelectorComponent {
  @Input() titleText: string = 'Default';
  @Input() firstButtonText: string = 'Default';
  @Input() secondButtonText: string = 'Default';

  @Output() firstButtonClicked = new EventEmitter<void>();
  @Output() secondButtonClicked = new EventEmitter<void>();

  onFirstButtonClick() {
    this.firstButtonClicked.emit();
  }

  onSecondButtonClick() {
    this.secondButtonClicked.emit();
  }

  constructor(private router: Router) {}
  
  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }

  navigateTo(route: string) {
    this.router.navigate(['/${route}']);
  }
}
