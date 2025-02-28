import { NotificationService, NotificationMessage } from "../shared/model";

export class PushNotificationService implements NotificationService {
  sendNotification(notification: NotificationMessage): void {
    console.log(`[PUSH] Sending push notification to User ${notification.userId}: ${notification.message}`);
  }
}