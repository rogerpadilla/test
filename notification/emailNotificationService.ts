import { NotificationMessage, NotificationService } from "../shared/model";

export class EmailNotificationService implements NotificationService {
  sendNotification(notification: NotificationMessage): void {
    console.log(`[EMAIL] Sending email notification to User ${notification.userId}: ${notification.message}`);
  }
}
