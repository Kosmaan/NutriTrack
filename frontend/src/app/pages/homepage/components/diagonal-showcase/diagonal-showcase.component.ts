import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-diagonal-showcase',
  templateUrl: './diagonal-showcase.component.html',
  styleUrls: ['./diagonal-showcase.component.scss']
})
export class DiagonalShowcaseComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onButtonClick() {
    if(this.authService.loggedIn()) {
      this.router.navigate(['/dashboard/about-us']);
    }
    else {
      this.router.navigate(['/authentication/login/']);
    }
  }
}
