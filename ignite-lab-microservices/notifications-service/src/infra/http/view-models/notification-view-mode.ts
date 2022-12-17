import Notification from "@domain/entities/notifications/notification";

export default class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId
    };
  }
}