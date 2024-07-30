import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/dashboard/home']);
  }
}
