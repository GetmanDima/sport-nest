import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {PlayerService} from "./player.service";
import {CreatePlayerDto} from "./dto/create-player.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RoleGuard } from "../guards/role.guard";

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post()
  create(@Body() dto: CreatePlayerDto) {
    return this.playerService.createPlayer(dto);
  }
}
