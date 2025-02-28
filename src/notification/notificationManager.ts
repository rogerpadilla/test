import { EventEmitter } from "events";
import { notificationCategoryMap } from "../shared/const";
import { UserRepository, NotificationEvent, NotificationMessage } from "../shared/model";
import { NotificationDispatcher } from "./notificationDispatcher";

export class NotificationManager {

  constructor(private readonly userRepository: UserRepository, private readonly dispatcher: NotificationDispatcher) {
    this.userRepository = userRepository;
    this.dispatcher = dispatcher;
  }

  processNotification(userId: number, message: string, notificationEvent: NotificationEvent): void {
    const notification = new NotificationMessage(userId, message, notificationEvent);
    const userPreferences = this.userRepository.findUserPreferences(userId);
    const category = notificationCategoryMap[notificationEvent];

    if (userPreferences.enabledCategories && !userPreferences.enabledCategories[category]) {
      console.log(`Notification suppressed for User ${userId} (${notificationEvent}): Category disabled`);
      return;
    }

    if (userPreferences.enabledEvents && !userPreferences.enabledEvents[notificationEvent]) {
      console.log(`Notification suppressed for User ${userId} (${notificationEvent}): Type disabled`);
      return;
    }

    // If we get here, send the notification through all enabled channels
    this.dispatcher.dispatchNotification(notification);
  }
}