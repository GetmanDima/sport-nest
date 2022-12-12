import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Player} from "./models/player.model";
import {CreatePlayerDto} from "./dto/create-player.dto";

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player)
    private playerRepository: typeof Player
  ) {}

  async createPlayer(dto: CreatePlayerDto) {
    return await this.playerRepository.create(dto)
  }
}
