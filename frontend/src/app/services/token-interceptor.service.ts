import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

constructor(private injector : Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService)
    
    if (req.url.endsWith('/login') || req.url.endsWith('/register')) {
      return next.handle(req);
  }


    let tokenizedReq  = req.clone({
    setHeaders: {
      Authorization : `Bearer ${authService.getToken()}`
      }
    })
    console.log(tokenizedReq);
    return next.handle(tokenizedReq )
  }

}