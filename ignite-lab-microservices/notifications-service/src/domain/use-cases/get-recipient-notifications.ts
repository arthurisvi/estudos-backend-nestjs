import Notification from "@domain/entities/notifications/notification";
import { Injectable } from "@nestjs/common";
import NotificationsRepository from "../repositories/notifications-repository";

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export default class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications
    };
  }
}
