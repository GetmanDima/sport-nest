import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import {Tournament} from "./models/tournament.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers: [TournamentController],
  imports: [
    SequelizeModule.forFeature([Tournament]),
  ],
  providers: [
    TournamentService,
  ],
  exports: [
    TournamentService,
  ]
})
export class TournamentModule {}
