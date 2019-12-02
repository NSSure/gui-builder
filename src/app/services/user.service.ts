import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import UserRegistration from '../models/UserRegistration';

@Injectable()
export class UserService extends BaseService {
  private _isAuthenticatedSource = new BehaviorSubject<boolean>(!this.isTokenExpired);

  isAuthenticated = this._isAuthenticatedSource.asObservable();

  setIsAuthenticated(isAuthenticated) {
    this._isAuthenticatedSource.next(isAuthenticated);
  }

  get token() {
    let userToken = JSON.parse(localStorage.getItem('userToken'));

    if (userToken) {
      // [0] = Header, [1] = Payload, [2] = Signature
      let tokenComponents = userToken.token.split('.');
      let payload = tokenComponents[1];

      let payloadJson = atob(payload);

      return JSON.parse(payloadJson);
    }

    return null;
  }

  get tokenExpiration(): Date {
    if (this.token) {
      return new Date(this.token.exp * 1000);
    }

    return null;
  }

  get isTokenExpired(): boolean {
    if (this.tokenExpiration) {
      return this.tokenExpiration < new Date();
    }
    
    return true;
  }

  get apiUrl() {
    return `${this.baseUrl}user/`
  }

  register(userRegistration: UserRegistration) {
    return this.http.post(this.apiUrl + 'register', userRegistration, this.httpOptions);
  }

  login(userSignIn: UserRegistration) {
    return this.http.post<string>(this.apiUrl + 'login', userSignIn, this.httpOptions).pipe(map(token => {
      this.setIsAuthenticated(true);
      localStorage.setItem('userToken', JSON.stringify(token));
    }));
  }
}