import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        new_password: new FormControl('', [Validators.required]),
        confirm_password: new FormControl('', [Validators.required]),
      },
      { validator: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const newPassword = formGroup.get('new_password')?.value;
    const confirmPassword = formGroup.get('confirm_password')?.value;
    if (newPassword !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  }

  changePassword() {
    console.log('start change password');
    if (this.passwordForm.invalid) {
      console.log('password form invalid');
      this.passwordForm.markAllAsTouched();
      return;
    }

    console.log('password form valid');
    const newPassword = this.passwordForm.get('new_password')?.value;

    const email = localStorage.getItem('userId');

    console.log(email);
    console.log(newPassword);

    if (!email) {
      console.log('User email not found.');
      return;
    }

    this.authService.changePassword(email, newPassword).subscribe(
      () => {
        console.log('Password changed successfully');

      },
      (error) => {
        console.log('Error changing password: ', error);
        console.error('Error details:', error.error);
      }
    );
  }
}
