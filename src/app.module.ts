import { Module } from '@nestjs/common';
import { TournamentModule } from './tournament/tournament.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tournament} from "./tournament/models/tournament.model";
import { TimetableModule } from './timetable/timetable.module';
import {Timetable} from "./timetable/models/timetable.model";
import { TeamModule } from './team/team.module';
import {TeamTournament} from "./team/models/team-tournament.model";
import {Team} from "./team/models/team.model";
import { PlayerModule } from './player/player.module';
import {Player} from "./player/models/player.model";
import { GameModule } from './game/game.module';
import { Game } from "./game/models/game.model";
import { GameTeam } from "./game/models/game-team.model";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from "./user/models/user.model";
import { AppConfigModule } from './app-config/app-config.module';
import { ArticleModule } from './article/article.module';
import { Article } from "./article/models/article.model";
import { CommentModule } from './comment/comment.module';
import { Comment } from "./comment/models/comment.model";

@Module({
  imports: [
    AppConfigModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      models: [Tournament, Timetable, Team, TeamTournament, Player, Game, GameTeam, User, Article, Comment],
    }),
    TournamentModule,
    TimetableModule,
    TeamModule,
    PlayerModule,
    GameModule,
    UserModule,
    AuthModule,
    ArticleModule,
    CommentModule,
  ],
  controllers: [],
})
export class AppModule {}
