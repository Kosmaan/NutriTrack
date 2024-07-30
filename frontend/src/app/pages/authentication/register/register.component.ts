import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  picker!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  registerForm!: FormGroup;

  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        first_Name: new FormControl('', [Validators.required]),
        last_Name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        height: new FormControl('', [Validators.required]),
        weight: new FormControl('', [Validators.required]),
      }
    )
  }
  onRegisterSubmit() {
    console.log("register");
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value)
        .subscribe(res => {
          this.authService.sessionUser = res;
          localStorage.setItem("userId", res.email)
          localStorage.setItem('token', res.token)

          let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'dashboard/home';
          this.router.navigateByUrl(redirectUrl);
        }
        )
    }
  }

}
