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
        old_password: new FormControl('', [Validators.required]),
        new_password: new FormControl('', [Validators.required]),
        confirm_password: new FormControl('', [Validators.required]),
      },
      { validator: this.passwordsMatchValidator }
    );
  }

  // Custom validator to ensure new_password and confirm_password match
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
      this.passwordForm.markAllAsTouched(); // Highlight errors if the form is invalid
      return;
    }

    console.log('password form valid');
    const oldPassword = this.passwordForm.get('old_password')?.value;
    const newPassword = this.passwordForm.get('new_password')?.value;

    // Assuming you have some way to get the current user email, e.g., from localStorage or a service
    const email = localStorage.getItem('userId');

    if (!email) {
      console.log('User email not found.');
      return;
    }

    // You might need to send both old and new passwords if your backend expects them
    // If only the new password is needed, adjust accordingly
    this.authService.changePassword(email, oldPassword).subscribe(
      () => {
        console.log('Password changed successfully');
        // Optionally redirect or clear form
      },
      (error) => {
        console.log('Error changing password: ', error);
        console.error('Error details:', error.error);
      }
    );
  }
}
