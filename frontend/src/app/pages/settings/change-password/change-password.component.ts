import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
      this.registerForm = new FormGroup( {
        password: new FormControl('')
      })
  }
}
