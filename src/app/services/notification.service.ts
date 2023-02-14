import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../Models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url = "https://localhost:7150/notification";

  constructor(private http: HttpClient) { }

  public getNotifications() : Observable<Notification[]> {
    return this.http.get<Notification[]>(this.url);
  }
}
