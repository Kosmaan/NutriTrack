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
      newEmail: new FormControl('', [Validators.email, Validators.required]),
    });
  }


  updateDetails() {
    if (this.detailsForm.invalid) {
      console.log('Form is invalid. Marking all fields as touched.');
      this.detailsForm.markAllAsTouched();
      return;
    }

    const formValues = this.detailsForm.value;
    const oldEmail = localStorage.getItem('userId') || '';


    const payload = {
      first_Name: formValues.firstName,
      last_Name: formValues.lastName,
      height: formValues.height,
      oldEmail: oldEmail, 
      newEmail: formValues.newEmail,
    };

    console.log('Form Values:', formValues);
    console.log('Payload for API:', payload);


    this.authService.updateUserDetails(payload).subscribe(
      () => {
        console.log('Details updated successfully');

      },
      (error) => {
        console.error('Error updating details:', error);

      }
    );
  }
}
