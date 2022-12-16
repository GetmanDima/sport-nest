import { Body, Controller, Param, Post } from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGameDto } from "./dto/create-game.dto";

@Controller('/tournaments/:tournamentName/games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  create(@Param('tournamentName') tournamentName: string, @Body() dto: CreateGameDto) {
    return this.gameService.createGame({...dto, tournamentName});
  }
}
