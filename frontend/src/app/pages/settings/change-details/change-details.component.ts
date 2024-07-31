import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-details',
  templateUrl: './change-details.component.html',
  styleUrls: ['./change-details.component.scss'],
})
export class ChangeDetailsComponent implements OnInit {
  detailsForm!: FormGroup;

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
    });
  }
}
