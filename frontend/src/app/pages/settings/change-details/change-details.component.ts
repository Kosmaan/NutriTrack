import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-change-details',
  templateUrl: './change-details.component.html',
  styleUrls: ['./change-details.component.scss'],
})
export class ChangeDetailsComponent implements OnInit {
  detailsForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      newEmail: new FormControl('', [Validators.email, Validators.required]), // Required for validation
    });
  }

  // Method to handle form submission
  updateDetails() {
    if (this.detailsForm.invalid) {
      console.log('Form is invalid. Marking all fields as touched.');
      this.detailsForm.markAllAsTouched(); // Mark all fields as touched to display validation errors
      return;
    }

    const formValues = this.detailsForm.value;
    const oldEmail = localStorage.getItem('userId') || ''; // Retrieve the old email from localStorage

    // Construct the request payload
    const payload = {
      first_Name: formValues.firstName,
      last_Name: formValues.lastName,
      height: formValues.height,
      oldEmail: oldEmail, // Use the email from localStorage
      newEmail: formValues.newEmail,
    };

    console.log('Form Values:', formValues);
    console.log('Payload for API:', payload);

    // Call the service method to update details
    this.authService.updateUserDetails(payload).subscribe(
      () => {
        console.log('Details updated successfully');
        // Optionally, handle success (e.g., show a message, redirect)
      },
      (error) => {
        console.error('Error updating details:', error);
        // Optionally, handle error (e.g., show an error message)
      }
    );
  }
}
