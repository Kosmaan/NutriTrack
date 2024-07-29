import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/dashboard/home']);
  }

  goToDashboard() {
    this.router.navigate(['/admin']);
  }

  redirectToStatistics() {
    this.router.navigate(['/dashboard/statistics']);
  }

  redirectToSettings() {
    this.router.navigate(['/dashboard/settings']);
  }
}
