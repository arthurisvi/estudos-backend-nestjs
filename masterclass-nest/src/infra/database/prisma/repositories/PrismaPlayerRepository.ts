import { randomUUID } from "node:crypto";
import { PrismaService } from "../prisma.service";
import { CreatePlayerBodyDTO } from "src/domain/dtos/CreatePlayerBodyDTO";
import { PlayerRepository } from "src/domain/repositories/PlayerRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaPlayerRepository implements PlayerRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: CreatePlayerBodyDTO): Promise<void> {
    await this.prisma.player.create({
      data: {
        id: randomUUID(),
        name: data.name,
        position: data.position
      }
    })
  }
}