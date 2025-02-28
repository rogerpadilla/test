export type Truthy<T extends string> = { readonly [p in T]?: true }

export class NotificationMessage {
  readonly timestamp = new Date();
  constructor(readonly userId: number, readonly message: string, readonly event: NotificationEvent) { }
}

export type NotificationChannel = 'IN_APP' | 'EMAIL' | 'PUSH'; // | 'SMS' | 'CALL';

export type NotificationEvent =
  "LEVEL_UP" | "ITEM_ACQUIRED" | "CHALLENGE_COMPLETED" | "PVP_EVENT" | "FRIEND_REQUEST" | "FRIEND_ACCEPTED" | "NEW_FOLLOWER"


export type NotificationCategory = "GAME_EVENTS" | "SOCIAL_EVENTS";

export interface UserPreferences {
  readonly userId: number;
  readonly enabledEvents: Truthy<NotificationEvent>;
  readonly enabledCategories: Truthy<NotificationCategory>;
  readonly enabledChannels: Truthy<NotificationChannel>;
}

export interface NotificationService {
  sendNotification(notification: NotificationMessage): void;
}

export interface UserRepository {
  findUserPreferences(userId: number): UserPreferences;
}
