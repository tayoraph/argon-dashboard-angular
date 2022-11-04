import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, retry, first, flatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/appState';
import { getAuthorizationTokenAfterLogin } from 'src/app/pages/Authentication/login/store/login.action';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor( public store: Store<AppState>) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(getAuthorizationTokenAfterLogin).pipe(
      first(),
      flatMap(token => {
        const authReq = !!token ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + AuthToken },
        }) : req;
        return next.handle(authReq);
      }),
    );
  }
  // intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const API_KEY = '123456';
  //   return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  // }
}



@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest);
  }
}

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(retry(2));
  }
}


 const AuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdXBlcmFkbWluIiwianRpIjoiNDNmNDA1MmMtNTM2Mi00NzJiLWFjMWUtMzllY2NmY2ZiNzE4IiwiZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInVpZCI6IjQ2MWEyNjk2LTU4YWYtNDMzYS04YWEyLTFkMzg1YjBjNmU2MCIsImlwIjoiMTAuMTEuMjguNDkiLCJ1c2VyZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGVpZCI6IjVlYTQ4NDQ5LWYwNTEtNGEzMC05MjljLWZlYWIyYmRiN2EzNCIsInJvbGVuYW1lIjoiU3VwZXJBZG1pbiIsIm5hbWUiOiJNdWtlc2ggTXVydWdhbiIsInJvbGVzIjoiU3VwZXJBZG1pbiIsImV4cCI6MTY2NzE1ODc5MSwiaXNzIjoiQ29yZUlkZW50aXR5IiwiYXVkIjoiQ29yZUlkZW50aXR5VXNlciJ9.kIW6Qz_2g_ujtzkaDwMdka5ILSa4s3hKAGopo-pM1wo";
