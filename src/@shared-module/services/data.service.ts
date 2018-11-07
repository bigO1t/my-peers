import { UserService } from './user.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { IdentityService } from './identity.service';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  fullUserName = '';

  descriptionList = [];

  fullUrl = (baseUrl, extUrl) => `${baseUrl}/${extUrl}`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private identityService: IdentityService,
    private userService: UserService
  ) {}

  getData(baseUrl, extUrl): Observable<any> {
    return this.http.get(this.fullUrl(baseUrl, extUrl)).pipe(
      tap(_ =>
        this.messageService.getLog(this.identityService.identity(this), 'Data Fetched Successfully')
      ),
      catchError(this.messageService.handleError<any>('Error Getting Data'))
    );
  }

  updateData<T>(baseUrl, extUrl, putObject?: T): Observable<any> {
    console.log(putObject, JSON.stringify(putObject));
    return this.http.put(this.fullUrl(baseUrl, extUrl), putObject).pipe(
      tap(_ =>
        this.messageService.log(this.identityService.identity(this), 'Data Updated Successfully')
      ),
      catchError(this.messageService.handleError<any>('Error Updating Data'))
    );
  }

  addData<T>(baseUrl, extUrl, postObject?: T): Observable<any> {
    console.log(postObject, JSON.stringify(postObject));
    return this.http.post(this.fullUrl(baseUrl, extUrl), postObject).pipe(
      tap(_ =>
        this.messageService.log(this.identityService.identity(this), 'Data Added Successfully')
      ),
      catchError(this.messageService.handleError<any>('Error Adding Data'))
    );
  }

  removeData<T>(baseUrl, extUrl): Observable<any> {
    return this.http.delete(this.fullUrl(baseUrl, extUrl)).pipe(
      tap(_ =>
        this.messageService.log(this.identityService.identity(this), 'Data Deleted Successfully')
      ),
      catchError(this.messageService.handleError<any>('Error Deleting Data'))
    );
  }
}
