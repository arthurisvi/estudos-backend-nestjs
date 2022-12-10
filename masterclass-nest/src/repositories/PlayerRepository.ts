import { CreatePlayerBody } from "src/dtos/CreatePlayerBody";

export abstract class PlayerRepository{
  abstract create(data: CreatePlayerBody): Promise<void> {
    
  }
}