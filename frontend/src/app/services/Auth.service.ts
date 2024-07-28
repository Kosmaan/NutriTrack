import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionUser!: User;
  constructor(private http: HttpClient) {}

  url = 'https://localhost:7154/Authentication';
  redirectUrl: string | null = null;
  login(user: any) {
    return this.http.post<any>(this.url + '/LoginUser', user);
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

  checkAdmin() {
    return false;
  }
}
