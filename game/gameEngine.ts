import { NotificationManager } from "../notification/notificationManager";

// Game Engine to simulate game events
export class GameEngine {
  constructor(private readonly notificationManager: NotificationManager) {

  }

  playerLeveledUp(userId: number, newLevel: number): void {
    console.log(`Game event: User ${userId} leveled up to ${newLevel}`);
    this.notificationManager.processNotification(
      userId,
      `Congratulations! You've reached level ${newLevel}!`,
      'LEVEL_UP'
    );
  }

  itemAcquired(userId: number, itemName: string): void {
    console.log(`Game event: User ${userId} acquired item ${itemName}`);
    this.notificationManager.processNotification(
      userId,
      `You've acquired the legendary ${itemName}!`,
      'ITEM_ACQUIRED'
    );
  }

  challengeCompleted(userId: number, challengeName: string): void {
    console.log(`Game event: User ${userId} completed challenge ${challengeName}`);
    this.notificationManager.processNotification(
      userId,
      `Challenge completed: ${challengeName}!`,
      'CHALLENGE_COMPLETED'
    );
  }

  pvpEvent(attackerId: number, victimId: number, result: string): void {
    console.log(`PVP event: User ${attackerId} vs User ${victimId}, result: ${result}`);

    this.notificationManager.processNotification(
      victimId,
      `You were ${result} by player ${attackerId} in PVP combat!`,
      'PVP_EVENT'
    );

    this.notificationManager.processNotification(
      attackerId,
      `You ${result} player ${victimId} in PVP combat!`,
      'PVP_EVENT'
    );
  }
}