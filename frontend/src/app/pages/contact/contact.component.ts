import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private contactService: ContactService, private toastService: ToastService) {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.toastService.show('Form submitted successfully!', 'success');
      const formData = this.contactForm.value;
      this.contactService.sendContactForm(formData).subscribe(
        (response) => {
          console.log('Form submission successful', response);
        },
        (error) => {
          console.log('Form submission error', error);
        }
      );
    } else {
      this.toastService.show('Please complete all required fields.', 'error');
      console.log('Form is invalid');
    }
  }



}
