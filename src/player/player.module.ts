import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Player} from "./models/player.model";

@Module({
  controllers: [PlayerController],
  imports: [
    SequelizeModule.forFeature([Player]),
  ],
  providers: [PlayerService],
  exports: [
    PlayerService,
  ]
})
export class PlayerModule {}
