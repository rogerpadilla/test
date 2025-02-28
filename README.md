# Notifications System

## Requirements
- Node >= 22 (tested on version 22.14.0)

## Instructions:
1. `npm install`
2. `npm start`

---

Below is a sample output of what you should see after executing the demo program.


```
================ NOTIFICATION SYSTEM DEMO ================
User 1: All notifications enabled
User 2: Only game notifications enabled
User 3: Only social notifications enabled
=========================================================
Game event: User 1 leveled up to 15
[EMAIL] Sending email notification to User 1: Congratulations! You've reached level 15!
[IN-APP] Sending notification to User 1: Congratulations! You've reached level 15!
[PUSH] Sending push notification to User 1: Congratulations! You've reached level 15!
Game event: User 2 acquired item Sword of Azeroth
[EMAIL] Sending email notification to User 2: You've acquired the legendary Sword of Azeroth!
[IN-APP] Sending notification to User 2: You've acquired the legendary Sword of Azeroth!
[PUSH] Sending push notification to User 2: You've acquired the legendary Sword of Azeroth!
Game event: User 3 completed challenge Dragon Slayer
Notification suppressed for User 3 (CHALLENGE_COMPLETED): Category disabled
PVP event: User 1 vs User 2, result: defeated
[EMAIL] Sending email notification to User 2: You were defeated by player 1 in PVP combat!
[IN-APP] Sending notification to User 2: You were defeated by player 1 in PVP combat!
[PUSH] Sending push notification to User 2: You were defeated by player 1 in PVP combat!
[EMAIL] Sending email notification to User 1: You defeated player 2 in PVP combat!
[IN-APP] Sending notification to User 1: You defeated player 2 in PVP combat!
[PUSH] Sending push notification to User 1: You defeated player 2 in PVP combat!
Social event: User 3 sent friend request to User 1
[EMAIL] Sending email notification to User 1: Player 3 has sent you a friend request.
[IN-APP] Sending notification to User 1: Player 3 has sent you a friend request.
[PUSH] Sending push notification to User 1: Player 3 has sent you a friend request.
Social event: User 1 accepted friend request from User 3
[EMAIL] Sending email notification to User 3: Player 1 has accepted your friend request!
[IN-APP] Sending notification to User 3: Player 1 has accepted your friend request!
[PUSH] Sending push notification to User 3: Player 1 has accepted your friend request!
[EMAIL] Sending email notification to User 1: You are now friends with Player 3!
[IN-APP] Sending notification to User 1: You are now friends with Player 3!
[PUSH] Sending push notification to User 1: You are now friends with Player 3!
Social event: User 2 started following User 3
[EMAIL] Sending email notification to User 3: Player 2 has started following you!
[IN-APP] Sending notification to User 3: Player 2 has started following you!
[PUSH] Sending push notification to User 3: Player 2 has started following you!
Social event: User 2 sent friend request to User 3
[EMAIL] Sending email notification to User 3: Player 2 has sent you a friend request.
[IN-APP] Sending notification to User 3: Player 2 has sent you a friend request.
[PUSH] Sending push notification to User 3: Player 2 has sent you a friend request.
```