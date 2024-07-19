import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  @Input() titleText: string = 'Default';
  @Input() firstButtonText: string = 'Default';
  @Input() secondButtonText: string = 'Default';
  
  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
