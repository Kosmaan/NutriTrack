import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  showAddMeal: boolean = false;

  handleFirstButtonClick() {
    this.showAddMeal = true;
  }

  handleSecondButtonClick() {
    this.showAddMeal = false;
  }
}
