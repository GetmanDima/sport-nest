import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Game } from "./models/game.model";
import { CreateGameDto } from "./dto/create-game.dto";

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game)
    private gameRepository: typeof Game
  ) {}

  async createGame(dto: CreateGameDto & {tournamentName: string}) {
    const game = await this.gameRepository.create(dto)
    await game.$add('teams', dto.teams)

    return game
  }
}
