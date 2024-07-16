import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
sessionUser !: User
constructor(private http : HttpClient) { }

url = "http://localhost:8080";
redirectUrl : string | null = null;
login(user: any){
  
  return this.http.post<any>(this.url + "/login",user)
}

register(user: any){
  return this.http.post<any>(this.url + "/register",user)
}

loggedIn()
{
  //asta e doar intermediar. very bad trebuie modificata
  let token = this.getToken();
  if(!token)
    return false;
   return true;
}

getToken()
{
  return localStorage.getItem('token')
}

getHeader()
{
  let token = this.getToken();
  if(!token)
    return false;
  return new HttpHeaders().set('Authorization', `Bearer ${token}`);
}



}
