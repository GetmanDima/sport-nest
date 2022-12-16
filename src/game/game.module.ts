import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { GameController } from "./game.controller";
import { Game } from "./models/game.model";

@Module({
  controllers: [GameController],
  imports: [
    SequelizeModule.forFeature([Game]),
  ],
  providers: [GameService],
  exports: [
    GameService
  ]
})
export class GameModule {}
