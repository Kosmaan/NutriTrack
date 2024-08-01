import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'https://localhost:7154/Authentication';

  constructor(private http: HttpClient) {}

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
    console.log('Query Parameters:', params.toString());

    return this.http.post<void>(fullUrl, null, { params, headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
