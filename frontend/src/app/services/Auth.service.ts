import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { tap } from 'rxjs';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionUser!: User;
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

}
