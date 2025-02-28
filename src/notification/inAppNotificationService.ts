import { NotificationMessage, NotificationService } from '../shared/model';

export class InAppNotificationService implements NotificationService {
  sendNotification(notification: NotificationMessage): void {
    // this would send to the client
    console.log(`[IN-APP] Sending notification to User ${notification.userId}: ${notification.message}`);
  }
}

