import { CreatePlayerBodyDTO } from "src/domain/dtos/CreatePlayerBodyDTO";

export abstract class PlayerRepository{
  abstract create(data: CreatePlayerBodyDTO): Promise<void>;
}