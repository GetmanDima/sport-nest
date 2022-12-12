import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentController } from './tournament/tournament.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tournament} from "./tournament/models/tournament.model";
import { TimetableModule } from './timetable/timetable.module';
import {Timetable} from "./timetable/models/timetable.model";
import { TeamModule } from './team/team.module';
import {TeamTournament} from "./team/models/team-tournament.model";
import {Team} from "./team/models/team.model";
import { PlayerModule } from './player/player.module';
import {Player} from "./player/models/player.model";
import { MainController } from './main/main.controller';

const envFileName = process.env.NODE_ENV === "production" ? "production" : "development";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${envFileName}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      models: [Tournament, Timetable, Team, TeamTournament, Player],
    }),
    TournamentModule,
    TimetableModule,
    TeamModule,
    PlayerModule,
  ],
  controllers: [MainController],
})
export class AppModule {}
