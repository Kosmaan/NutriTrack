import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-details',
  templateUrl: './change-details.component.html',
  styleUrls: ['./change-details.component.scss']
})
export class ChangeDetailsComponent implements OnInit{
  registerForm!: FormGroup;

  ngOnInit(): void {
      this.registerForm = new FormGroup( {
        email: new FormControl('', [Validators.email]),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        height: new FormControl('')
      })
  }
}
