import { Module } from '@nestjs/common';
import { PlayersController } from './infra/http/controllers/PlayersController';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { PlayerRepository } from './domain/repositories/PlayerRepository';
import { PrismaPlayerRepository } from './infra/database/prisma/repositories/PrismaPlayerRepository';
import PlayerService from './domain/services/CreatePlayerService';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [
    PrismaService,
    PlayerService,
    {
      provide: PlayerRepository,
      useClass: PrismaPlayerRepository,
    }
  ],
})
export class AppModule { }
