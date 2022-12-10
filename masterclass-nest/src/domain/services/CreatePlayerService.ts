import { Injectable } from "@nestjs/common";
import { CreatePlayerBodyDTO } from "../dtos/CreatePlayerBodyDTO";
import { PlayerRepository } from "../repositories/PlayerRepository";

@Injectable()
export default class PlayerService {

  constructor(private playerRepository: PlayerRepository) { }

  public async create(data: CreatePlayerBodyDTO): Promise<void> {
    return await this.playerRepository.create(data);
  }
}