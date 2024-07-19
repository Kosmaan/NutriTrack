import { Component } from '@angular/core';

@Component({
  selector: 'app-remove-page',
  templateUrl: './remove-page.component.html',
  styleUrls: ['./remove-page.component.scss']
})
export class RemovePageComponent {
  showRemoveMeal: boolean = false;
  showButtons: boolean = false;

  toggleButtons(show: boolean) {
    this.showButtons = show;
  }
}
