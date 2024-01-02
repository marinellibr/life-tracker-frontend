import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UserService {
  constructor(private httpClient: HttpClient) { }
  
  getAllUsers(): Observable<any>{
    return this.httpClient.get<any>('https://life-tracker-backend-3337f07a8458.herokuapp.com/users');
  }
}