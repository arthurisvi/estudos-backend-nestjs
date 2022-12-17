import Notification from "@domain/entities/notifications/notification";
import NotificationsRepository from "@domain/repositories/notifications-repository";

export default class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
