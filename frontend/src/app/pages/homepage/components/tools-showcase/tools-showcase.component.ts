import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-showcase',
  templateUrl: './tools-showcase.component.html',
  styleUrls: ['./tools-showcase.component.scss'],
})
export class ToolsShowcaseComponent {
  constructor(private authService: AuthService, private router: Router) {}

  redirectToStatistics() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/statistics']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }

  redirectToPlans() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/plans']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }

  onButtonClick() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/home']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }
}
