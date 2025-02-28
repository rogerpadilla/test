import { UserPreferences, UserRepository as UserPreferencesRepository } from "../shared/model";

// Simulation of user repository
export class InMemoryUserPreferencesRepository implements UserPreferencesRepository {
  private readonly data = new Map<number, UserPreferences>();

  findUserPreferences(userId: number): UserPreferences {
    const preferences = this.data.get(userId);
    if (!preferences) {
      // Default to all events, categories, and channels
      return {
        userId,
        enabledCategories: { GAME_EVENTS: true, SOCIAL_EVENTS: true },
        enabledChannels: { EMAIL: true, IN_APP: true, PUSH: true },
        enabledEvents: { CHALLENGE_COMPLETED: true, FRIEND_ACCEPTED: true, FRIEND_REQUEST: true, ITEM_ACQUIRED: true, LEVEL_UP: true, NEW_FOLLOWER: true, PVP_EVENT: true }
      };
    }
    return preferences;
  }

  updateUserPreferences(
    preferences: UserPreferences
  ): void {
    this.data.set(preferences.userId, { ...preferences });
  }
}
