import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { MealPlan } from '../models/MealPlan';
import { UserWeight } from '../models/UserWeight';


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

  usePlan(plan : MealPlan)
  {
    return this.http.put<any>(this.url + `/ChangeCurrentPlan?planId=${plan.meal_Plan_Id.toString()}&email=` +localStorage.getItem('userId'), "");
  }

  getUserData()
  {
    let  email =  localStorage.getItem('userId');
    return this.http.get<any>(`${this.url}/GetUserData?email=${email}`, );

  }

  addUserWeight(data : UserWeight)
  {
    return this.http.post<any>(this.url + '/AddUserWeight', data);
  }

  getUserWeight()
  {
    return this.http.get<any>(this.url + '/GetUserWeight?email=' + localStorage.getItem("userId") );
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
    return this.http.delete<void>(this.url + '/DeleteUser?userId=${email}', { params }).pipe(
      tap(() => {
        this.toastService.show('Account deleted successfully', 'success');
      })
    );
  }

  changePassword(email: string, password: string): Observable<void> {
    const params = new HttpParams()
      .set('Email', email)
      .set('Password', password);


    return this.http.post<void>(`${this.url}/ChangePassword`, null, {
      params: params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap(() => {
        this.toastService.show('Password changed successfully', 'success');
        console.log('API call successful');
      }, (error) => {
        console.error('API call error:', error);
      })
    );
  }

  updateUserDetails(details: {
    first_Name: string;
    last_Name: string;
    height: string;
    oldEmail: string;
    newEmail: string;
  }): Observable<void> {

    const params = new HttpParams()
      .set('First_Name', details.first_Name)
      .set('Last_Name', details.last_Name)
      .set('Height', details.height)
      .set('OldEmail', details.oldEmail)
      .set('NewEmail', details.newEmail);


    console.log('Sending update request with parameters:', params.toString());

    return this.http.post<void>(`${this.url}/ChangeDetails`, null, {
      params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(
      tap(() => {
        this.toastService.show('User details changed successfully', 'success');
        console.log('API call successful');
      }, (error) => {
        console.error('API call error:', error);
      })
    );
  }

  sendContactForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
  }): Observable<void> {

    const params = new HttpParams()
      .set('Email', formData.email)
      .set('First_Name', formData.firstName)
      .set('Last_Name', formData.lastName)
      .set('Phone_Number', formData.phone)
      .set('Description', formData.description);


    const fullUrl = `${this.url}/ContactUs`;
    console.log('Full URL:', fullUrl);


    return this.http.post<void>(fullUrl, null, {
      params: params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  

}
