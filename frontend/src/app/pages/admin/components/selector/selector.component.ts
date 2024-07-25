import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  @Input() titleText: string = 'Default';
  @Input() firstButtonText: string = 'Default';
  @Input() secondButtonText: string = 'Default';
  @Input() pageType: 'add' | 'edit' = 'add';

  @Output() firstButtonClick = new EventEmitter<void>();
  @Output() secondButtonClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  onFirstButtonClick() {
    const route = this.pageType === 'edit' ? '/admin/edit/edit-meal' : '/admin/add/add-meal';
    this.router.navigate([route]);
  }

  onSecondButtonClick() {
    const route = this.pageType === 'edit' ? 'admin/edit/edit-meal-plan' : '/admin/add/add-meal-plan';
    this.router.navigate([route]);
  }

  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
