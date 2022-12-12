import {Body, Controller, Get, Post, Render} from '@nestjs/common';
import {PlayerService} from "./player.service";
import {CreatePlayerDto} from "./dto/create-player.dto";

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  create(@Body() dto: CreatePlayerDto) {
    return this.playerService.createPlayer(dto);
  }
}
