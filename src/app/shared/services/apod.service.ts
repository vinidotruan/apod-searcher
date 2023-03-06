import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Apod } from '@models/apod';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  private url = environment?.url;
  constructor(private http: HttpClient) {}

  public getDailyPicture = (): Observable<Apod> => {
    return this.http.get<Apod>(`${this.url}`);
  };
}
