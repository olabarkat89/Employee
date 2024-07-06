import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageComponent } from './message/message.component';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
   dialog = inject(MatDialog);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.dialog.open(MessageComponent,{   width: '400px',data: {  title: errorMsg || 'something wrong happened',
          btnLabel: 'Ok, Got it.',
          type: 'error', } })
                  return throwError(errorMsg);
      })
    );
  }
}
