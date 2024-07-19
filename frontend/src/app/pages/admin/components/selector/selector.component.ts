import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  onFirstButtonClick() {
    this.firstButtonClick.emit();
  }

  onSecondButtonClick() {
    this.secondButtonClick.emit();
  }

  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
