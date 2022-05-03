import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouterModule, Routes ,Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token: string = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI5MDI2MDMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJyb2RyaWdvamNvc2VudGlub0BnbWFpbC5jb20ifQ.FCUf0_sxrKDLsxymlQvtWKvOra6Myr4Rr4II1cmrenBlVN2mUB44kqhJ6kxmbwwZlficmxjTzaCObcaIs7L7gA";

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/');
        }

        return throwError( err );

      })
    );
  }
}