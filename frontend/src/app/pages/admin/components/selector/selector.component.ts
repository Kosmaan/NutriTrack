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

  @Output() firstButtonClick = new EventEmitter<void>();
  @Output() secondButtonClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  onFirstButtonClick() {
    this.router.navigate(['/admin/add/add-meal/'])
  }

  onSecondButtonClick() {
    this.secondButtonClick.emit();
  }

  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
