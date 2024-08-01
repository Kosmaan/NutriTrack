import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onButtonClick() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/statistics']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }
}
