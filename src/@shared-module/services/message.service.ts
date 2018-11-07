import { of } from 'rxjs/observable/of';
import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { StatusMessageComponent } from '../components/status-message/status-message.component';

@Injectable()
export class MessageService {
  messages: string[] = [];
  statuses = {
    success: 'success-snackbar',
    warn: 'warn-snackbar',
    error: 'error-snackbar'
  };

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message, status) {
    this.snackBar.openFromComponent(StatusMessageComponent, {
      duration: 8000,
      verticalPosition: 'top',
      panelClass: ['custom-snackbar', this.statuses[status]],
      data: message
    });
  }

  log(serviceClass: string, message: string, status: string = 'success') {
    this.add(`${serviceClass}: ${message}`);
    this.openSnackBar(message, status);
  }

  getLog(serviceClass: string, message: string) {
    this.add(`${serviceClass}: ${message}`);
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   **/
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      let  errorMsg  =
        error.error  &&  error.error.Messages  &&  error.error.Messages.length  >  0
          ?  error.error.Messages.join(', ')
          :  error.message;

      if (error.status === 409) {
        errorMsg = error.error;
      }

      console.log(`${operation} failed: ${errorMsg}`);

      console.error(`${operation} failed: ${errorMsg}`); // log to console instead

      this.log('Error', errorMsg, 'error');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
