import { NotificationChannel, NotificationMessage, NotificationService, UserRepository } from "../shared/model";

// Multi-channel notification dispatcher
export class NotificationDispatcher {
  private readonly services = new Map<string, NotificationService>();
  private readonly callbacks: ((notification: NotificationMessage) => void)[] = [];

  constructor(private readonly userRepository: UserRepository) { }

  registerService(channelName: NotificationChannel, service: NotificationService): void {
    this.services.set(channelName, service);
  }

  dispatchNotification(notification: NotificationMessage): void {
    const userId = notification.userId;
    const { enabledChannels } = this.userRepository.findUserPreferences(userId);

    for (const channelName of Object.keys(enabledChannels)) {
      const service = this.services.get(channelName);
      service?.sendNotification(notification);
    }

    for (const callback of this.callbacks) {
      callback.apply(this, [notification]);
    }
  }

  onNotificationDispatched(callback: (notification: NotificationMessage) => void): void {
    this.callbacks.push(callback)
  }
}
