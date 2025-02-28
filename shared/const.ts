import { NotificationEvent, NotificationCategory } from "./model";

// Map notification types to categories
export const notificationCategoryMap = Object.freeze<Record<NotificationEvent, NotificationCategory>>({
  LEVEL_UP: 'GAME_EVENTS',
  ITEM_ACQUIRED: 'GAME_EVENTS',
  CHALLENGE_COMPLETED: 'GAME_EVENTS',
  PVP_EVENT: 'GAME_EVENTS',
  FRIEND_REQUEST: 'SOCIAL_EVENTS',
  FRIEND_ACCEPTED: 'SOCIAL_EVENTS',
  NEW_FOLLOWER: 'SOCIAL_EVENTS'
});