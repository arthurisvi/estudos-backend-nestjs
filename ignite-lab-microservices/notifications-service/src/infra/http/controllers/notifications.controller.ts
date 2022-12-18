import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import SendNotification from '@domain/use-cases/send-notification';
import { CreateNotificationBody } from '../dto/create-notifcation-body';
import NotificationViewModel from '../view-models/notification-view-mode';
import CancelNotification from '@domain/use-cases/cancel-notification';
import ReadNotification from '@domain/use-cases/read-notification';
import UnreadNotification from '@domain/use-cases/unread-notification';
import CountRecipientNotifications from '@domain/use-cases/count-recipient-notifications';
import GetRecipientNotifications from '@domain/use-cases/get-recipient-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications
  ) { }
  
  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({ recipientId: recipientId })

    return {
      notifications: notifications.map(notification => NotificationViewModel.toHTTP(notification))
    };
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string): Promise<{ count: number }> {
    const { count } = await this.countRecipientNotifications.execute({ recipientId: recipientId })
    
    return {
      count
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({notificationId: id})
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({notificationId: id})
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id })
  }

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
