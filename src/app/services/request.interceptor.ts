import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);
    if(request.method === 'POST') {
      // to do something
    }
    const newReq = request.clone({ headers: 
      new HttpHeaders({
        //token: "123ggg321"
      })});
    return next.handle(newReq);
  }
}
