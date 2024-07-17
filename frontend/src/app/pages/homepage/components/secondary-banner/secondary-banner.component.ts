import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-banner',
  templateUrl: './secondary-banner.component.html',
  styleUrls: ['./secondary-banner.component.scss']
})
export class SecondaryBannerComponent {
  @Input() bannerText: string = 'Default';
}
