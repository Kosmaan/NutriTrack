import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchText: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearchClick(): void {
    this.searchEvent.emit(this.searchText);
  }
}
