import { EmailNotificationService } from "./notification/emailNotificationService";
import { GameEngine } from "./game/gameEngine";
import { InAppNotificationService } from "./notification/inAppNotificationService";
import { NotificationDispatcher } from "./notification/notificationDispatcher";
import { NotificationManager } from "./notification/notificationManager";
import { PushNotificationService } from "./notification/pushNotificationService";
import { SocialSystem } from "./social/socialSystem";
import { InMemoryUserPreferencesRepository } from "./user/userPreferencesRepository";

// Demo function to test the notification system
function runDemo() {
  const userRepository = new InMemoryUserPreferencesRepository();
  const dispatcher = new NotificationDispatcher(userRepository);

  // Register notification services
  dispatcher.registerService("IN_APP", new InAppNotificationService());
  dispatcher.registerService("EMAIL", new EmailNotificationService());
  dispatcher.registerService("PUSH", new PushNotificationService());

  // dispatcher.onNotificationDispatched((notification) => {
  //   console.log('Notification dispatched', notification)
  // });

  const notificationManager = new NotificationManager(
    userRepository,
    dispatcher
  );

  // it might be good to allow partial updates of preferences. it should be easy with a merge operation in memory to integrate new and old values.
  userRepository.updateUserPreferences({
    userId: 2,
    enabledCategories: { GAME_EVENTS: true },
    enabledChannels: { EMAIL: true, IN_APP: true, PUSH: true },
    enabledEvents: { CHALLENGE_COMPLETED: true, FRIEND_ACCEPTED: true, FRIEND_REQUEST: true, ITEM_ACQUIRED: true, LEVEL_UP: true, NEW_FOLLOWER: true, PVP_EVENT: true }
  });

  userRepository.updateUserPreferences({
    userId: 3,
    enabledCategories: { SOCIAL_EVENTS: true },
    enabledChannels: { EMAIL: true, IN_APP: true, PUSH: true },
    enabledEvents: { CHALLENGE_COMPLETED: true, FRIEND_ACCEPTED: true, FRIEND_REQUEST: true, ITEM_ACQUIRED: true, LEVEL_UP: true, NEW_FOLLOWER: true, PVP_EVENT: true }
  });


  const gameEngine = new GameEngine(notificationManager);
  const socialSystem = new SocialSystem(notificationManager);

  console.log("================ NOTIFICATION SYSTEM DEMO ================");
  console.log("User 1: All notifications enabled");
  console.log("User 2: Only game notifications enabled");
  console.log("User 3: Only social notifications enabled");
  console.log("=========================================================");

  // Simulate game events
  gameEngine.playerLeveledUp(1, 15); // User 1 should receive this
  gameEngine.itemAcquired(2, "Sword of Azeroth"); // User 2 should receive this
  gameEngine.challengeCompleted(3, "Dragon Slayer"); // User 3 should NOT receive this (game event)
  gameEngine.pvpEvent(1, 2, "defeated"); // User 1 and 2 should receive this

  // Simulate social events
  socialSystem.friendRequestSent(3, 1); // User 1 should receive this
  socialSystem.friendRequestAccepted(1, 3); // User 1 and 3 should receive this
  socialSystem.newFollower(2, 3); // User 3 should receive this
  socialSystem.friendRequestSent(2, 3); // User 3 should receive this
}

runDemo();
