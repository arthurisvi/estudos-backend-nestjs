import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import CancelNotification from '@domain/use-cases/cancel-notification';
import CountRecipientNotifications from '@domain/use-cases/count-recipient-notifications';
import ReadNotification from '@domain/use-cases/read-notification';
import UnreadNotification from '@domain/use-cases/unread-notification';
import SendNotification from 'src/domain/use-cases/send-notification';
import GetRecipientNotifications from '@domain/use-cases/get-recipient-notifications';
@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications
  ]
})
export class HttpModule { }
