import { Component } from '@angular/core';
import { Notification } from './Models/Notification';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resilia-notifications';
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  getNotifications() {
    this.notificationService
    .getNotifications()
    .subscribe((result: Notification[]) => this.notifications = result);
  }
}
