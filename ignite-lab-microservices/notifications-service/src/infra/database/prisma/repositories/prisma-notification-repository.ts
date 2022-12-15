import { Injectable } from "@nestjs/common";
import Notification from "../../../../domain/entities/notifications/notification";
import NotificationsRepository from "../../../../domain/repositories/notifications-repository"
import { PrismaService } from "../prisma.service";

@Injectable()
export default class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      }
    });
  }
}
