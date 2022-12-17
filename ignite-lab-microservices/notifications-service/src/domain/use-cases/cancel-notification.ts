import { Injectable } from "@nestjs/common";
import Content from "../entities/notifications/content";
import Notification from "../entities/notifications/notification";
import NotificationsRepository from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found.error";

interface CancelNotificationRequest {
  notificationId: string;
}

@Injectable()
export default class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: CancelNotificationRequest): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }
    
    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
