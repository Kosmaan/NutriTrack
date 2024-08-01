import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss'],
})
export class DeleteAccountComponent {
  constructor(private authService: AuthService, private router: Router) {}

  deleteAccount() {
    const email = localStorage.getItem('userId');

    if (!email) {
      console.log('User not found');
      return;
    }

    this.authService.deleteAccount(email).subscribe(
      () => {
        console.log('Account deleted successfully!');
        this.authService.logout();
        this.router.navigate(['/dashboard/home']);
      },
      (error) => {
        console.log('Error deleting account: ', error);
      }
    );
  }
}
