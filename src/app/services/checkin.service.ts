import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CheckinService {
  constructor(private httpClient: HttpClient) {}

  getAllByID(id: number): Observable<any>{
    return this.httpClient.get<any>(`https://life-tracker-backend-3337f07a8458.herokuapp.com/checkins/${id}`);
  }
  
}