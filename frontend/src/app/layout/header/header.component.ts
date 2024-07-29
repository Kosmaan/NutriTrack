import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isUserMenuVisible = false;

  constructor(public authService: AuthService, public router: Router) {}

  toggleUserMenu() {
    if (this.authService.loggedIn()) {
      this.isUserMenuVisible = !this.isUserMenuVisible;
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }

  closeUserMenu() {
    this.isUserMenuVisible = false;
  }
}
