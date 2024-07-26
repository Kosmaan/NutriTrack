import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent {
  @Input() photoUrl: string = '../../../../../assets/mealcard-placeholder.jpg';
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default Description';
  @Input() buttonRoute: string = '';
}
