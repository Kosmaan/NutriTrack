import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss'],
})
export class EditMealComponent {
  fileName: string = 'No file chosen';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      // Optionally handle the selected file here
    } else {
      this.fileName = 'No file chosen';
    }
  }

  onRemoveClick(): void {
    const confirmed = window.confirm(
      'Do you really want to remove this item? This action cannot be undone.'
    );
  }
}
