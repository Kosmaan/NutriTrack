import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accent-button',
  templateUrl: './accent-button.component.html',
  styleUrls: ['./accent-button.component.scss']
})
export class AccentButtonComponent {
  @Input() buttonText: string = 'Default';
}
