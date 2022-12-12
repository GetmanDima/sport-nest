import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Team} from "./models/team.model";

@Module({
  controllers: [TeamController],
  imports: [
    SequelizeModule.forFeature([Team]),
  ],
  providers: [TeamService],
  exports: [
    TeamService,
  ]
})
export class TeamModule {}
