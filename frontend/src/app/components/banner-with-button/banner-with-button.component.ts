import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-with-button',
  templateUrl: './banner-with-button.component.html',
  styleUrls: ['./banner-with-button.component.scss']
})
export class BannerWithButtonComponent {
  @Input() bannerText: string = 'Default';
}
