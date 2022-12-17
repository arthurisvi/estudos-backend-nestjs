import { Body, Controller, Get, Post } from '@nestjs/common';
import SendNotification from '@domain/use-cases/send-notification';
import { CreateNotificationBody } from '../dto/create-notifcation-body';
import NotificationViewModel from '../view-models/notification-view-mode';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification){}

  @Post()
  async store(@Body() data: CreateNotificationBody) {
    const { recipientId, content, category } = data;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
