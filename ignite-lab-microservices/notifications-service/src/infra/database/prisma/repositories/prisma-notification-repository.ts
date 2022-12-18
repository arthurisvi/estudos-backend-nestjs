import { Injectable } from "@nestjs/common";
import Notification from "../../../../domain/entities/notifications/notification";
import NotificationsRepository from "../../../../domain/repositories/notifications-repository"
import PrismaNotificationMapper from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export default class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService) { }
  
  async findById(notificationId: string): Promise<Notification | null> {

    const notification = await this.prismaService.notification.findUnique({
      where: { id: notificationId}
    })

    return PrismaNotificationMapper.toDomain(notification)
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: {recipientId}
    })

    return notifications.map((notification) => PrismaNotificationMapper.toDomain(notification))
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: {
        recipientId,
      }
    })

    return count
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void>{
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.update({
      where: { id: raw.id},
      data: raw,
    })
  }
}
