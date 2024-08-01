import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionUser!: User;
  private userEmail: string | null = null;
  private userPassword: string | null = null;
  constructor(private http: HttpClient, private toastService: ToastService, private router: Router) {}

  url = 'https://localhost:7154/Authentication';
  redirectUrl: string | null = null;
  login(user: any) {
    return this.http.post<any>(this.url + '/LoginUser', user).pipe(
      tap(() => {
        this.toastService.show('Logged in successfully', 'success');
      })
    )
  }

  register(user: any) {
    console.log(user);
    return this.http.post<any>(this.url + '/RegisterUser', user);
  }

  loggedIn() {
    //asta e doar intermediar. very bad trebuie modificata
    let token = this.getToken();
    if (!token) return false;
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getHeader() {
    let token = this.getToken();
    if (!token) return false;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("progress")
    localStorage.removeItem("userId")
    this.toastService.show('Logged out successfully', 'success');
    this.router.navigate(['/dashboard/home'])
  }

  checkAdmin(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = atob(payloadBase64);
      const payload = JSON.parse(decodedPayload);
      return payload.admin === 'true';
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  deleteAccount(email: string): Observable<void> {
    const params = new HttpParams().set('email', email);
    this.toastService.show('Account deleted successfully', 'success');
    return this.http.delete<void>(this.url + '/DeleteUser?userId=${email}', { params });
  }

  changePassword(email: string, password: string): Observable<void> {
    // Prepare the body for the POST request
    const body = { email, password };

    // Make the POST request with the body
    return this.http.post<void>(`${this.url}/ChangePassword`, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateUserDetails(details: {
    first_Name: string;
    last_Name: string;
    height: string;
    oldEmail: string;
    newEmail: string;
  }): Observable<void> {
    console.log('Sending update request with details:', details);

    return this.http.post<void>(`${this.url}/ChangeDetails`, details, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap(() => {
        console.log('API call successful');
      }, (error) => {
        console.error('API call error:', error);
      })
    );
  }

}
