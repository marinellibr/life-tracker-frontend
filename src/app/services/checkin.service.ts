import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from '../models/calendar';

@Injectable({ providedIn: 'root' })
export class CheckinService {
  constructor(private httpClient: HttpClient) {}

  getAllByID(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `https://life-tracker-backend-3337f07a8458.herokuapp.com/checkins/${id}`
    );
  }

  getAllByIDWithBetterResult(id: number): Observable<Calendar[]> {
    return this.httpClient.get<Calendar[]>(
      `https://life-tracker-backend-3337f07a8458.herokuapp.com/checkins2/${id}`
    );
  }

  sendCheckin(body: any): Observable<any> {
    return this.httpClient.post<any>(
      `https://life-tracker-backend-3337f07a8458.herokuapp.com/checkins`,
      body
    );
  }
}
