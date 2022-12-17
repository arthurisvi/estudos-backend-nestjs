import Notification from "@domain/entities/notifications/notification";
import NotificationsRepository from "@domain/repositories/notifications-repository";

export default class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(notification => notification.id === notificationId)
    return !notification ? null : notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification) {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
