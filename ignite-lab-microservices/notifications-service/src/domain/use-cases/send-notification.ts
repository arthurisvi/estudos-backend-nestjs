import Content from "../entities/notifications/content";
import Notification from "../entities/notifications/notification";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export default class SendNotification {
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {

    const notification = new Notification({
      recipientId: request.recipientId,
      content: new Content(request.content),
      category: request.category,
    });

    return {
      notification,
    };
  }
}
