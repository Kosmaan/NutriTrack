import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  showAddMeal: boolean = false;

  handleFirstButtonClick() {
    this.showAddMeal = true;
  }

  handleSecondButtonClick() {
    this.showAddMeal = false;
  }
}