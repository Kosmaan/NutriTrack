import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service'; 
@Component({
  selector: 'app-diagonal-showcase',
  templateUrl: './diagonal-showcase.component.html',
  styleUrls: ['./diagonal-showcase.component.scss']
})
export class DiagonalShowcaseComponent {
  @Input() buttonText: string = 'Default';
  @Input() authenticated: string = '/dashboard/plans';
  @Input() unauthenticated: string = '/authentication/login';
  routerLink: string = '';

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.routerLink = this.authService.loggedIn() ? this.authenticated : this.unauthenticated;
  }
}
