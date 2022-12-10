import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerBodyDTO } from 'src/domain/dtos/CreatePlayerBodyDTO';
import PlayerService from 'src/domain/services/CreatePlayerService';

@Controller('players')
export class PlayersController {
  constructor(private playerService: PlayerService) {}

  @Post()
  async store(@Body() data: CreatePlayerBodyDTO): Promise<void> {
    await this.playerService.create({
      name: data.name,
      position: data.position,
    })
  }
}
