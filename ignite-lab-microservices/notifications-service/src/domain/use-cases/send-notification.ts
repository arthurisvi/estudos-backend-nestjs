import Content from "../entities/notifications/content";
import Notification from "../entities/notifications/notification";
import NotificationsRepository from "../repositories/notifications-repository";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export default class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {

    const notification = new Notification({
      recipientId: request.recipientId,
      content: new Content(request.content),
      category: request.category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
