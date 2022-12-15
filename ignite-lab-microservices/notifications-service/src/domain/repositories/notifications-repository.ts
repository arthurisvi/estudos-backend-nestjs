import Notification from "../entities/notifications/notification";

export default abstract class NotificationsRepository {
  // abstract async getNotificationsByUserId(userId: string): Promise<Notification[]>;
  abstract create(notification: Notification): Promise<void>;
}
