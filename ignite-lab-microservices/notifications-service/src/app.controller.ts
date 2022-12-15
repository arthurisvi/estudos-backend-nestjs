import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from './infra/create-notifcation-body';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getAll() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async store(@Body() data: CreateNotificationBody) {
    const { recipientId, content, category } = data;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
