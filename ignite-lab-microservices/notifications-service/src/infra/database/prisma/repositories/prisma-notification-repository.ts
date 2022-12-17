import { Injectable } from "@nestjs/common";
import Notification from "../../../../domain/entities/notifications/notification";
import NotificationsRepository from "../../../../domain/repositories/notifications-repository"
import PrismaNotificationMapper from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export default class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async findById(notificationId: string): Promise<Notification | null>{
    return null;
  }

  async save(notification: Notification): Promise<void>{}
}
