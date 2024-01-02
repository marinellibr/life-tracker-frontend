import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  sendLogin(body: any): Observable<any> {
    return this.httpClient.post<any>(
      'https://life-tracker-backend-3337f07a8458.herokuapp.com/login',
      body
    );
  }
}
