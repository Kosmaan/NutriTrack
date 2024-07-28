import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-banner-with-button',
  templateUrl: './banner-with-button.component.html',
  styleUrls: ['./banner-with-button.component.scss']
})
export class BannerWithButtonComponent {
  @Input() bannerText: string = 'Default';

  constructor(private authService: AuthService, private router: Router) {}

  onButtonClick() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/home']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }
}
