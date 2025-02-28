import { NotificationManager } from "../notification/notificationManager";

// Social System to simulate social events
export class SocialSystem {
  constructor(private readonly notificationManager: NotificationManager) {
    this.notificationManager = notificationManager;
  }

  friendRequestSent(fromUserId: number, toUserId: number): void {
    console.log(`Social event: User ${fromUserId} sent friend request to User ${toUserId}`);
    this.notificationManager.processNotification(
      toUserId,
      `Player ${fromUserId} has sent you a friend request.`,
      'FRIEND_REQUEST'
    );
  }

  friendRequestAccepted(acceptingUserId: number, requestingUserId: number): void {
    console.log(`Social event: User ${acceptingUserId} accepted friend request from User ${requestingUserId}`);

    // Notify the person who sent the request
    this.notificationManager.processNotification(
      requestingUserId,
      `Player ${acceptingUserId} has accepted your friend request!`,
      'FRIEND_ACCEPTED'
    );

    // Optionally notify the accepting user as well
    this.notificationManager.processNotification(
      acceptingUserId,
      `You are now friends with Player ${requestingUserId}!`,
      'FRIEND_ACCEPTED'
    );
  }

  newFollower(followerId: number, followedUserId: number): void {
    console.log(`Social event: User ${followerId} started following User ${followedUserId}`);
    this.notificationManager.processNotification(
      followedUserId,
      `Player ${followerId} has started following you!`,
      'NEW_FOLLOWER'
    );
  }
}