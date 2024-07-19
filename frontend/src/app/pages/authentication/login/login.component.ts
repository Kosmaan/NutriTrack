import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res) => {
        localStorage.setItem('userId', res.id);
        localStorage.setItem('token', res.jwtToken);
        let redirectUrl = this.authService.redirectUrl
          ? this.router.parseUrl(this.authService.redirectUrl)
          : 'dashboard/home';
        this.router.navigateByUrl(redirectUrl);
      });
    }
  }
}
