import Notification from "../entities/notifications/notification";

export default abstract class NotificationsRepository {
  // abstract async getNotificationsByUserId(userId: string): Promise<Notification[]>;
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
