import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  HasMany
} from 'sequelize-typescript';
import {Tournament} from "../../tournament/models/tournament.model";
import {TeamTournament} from "./team-tournament.model";
import {Player} from "../../player/models/player.model";
import { Game } from "../../game/models/game.model";
import { GameTeam } from "../../game/dto/game-team.model";

interface TeamCreationAttrs {
  name: string;
  description: string
}

@Table({tableName: 'teams', timestamps: false})
export class Team extends Model<Team, TeamCreationAttrs> {
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  name: string;

  @Column({type: DataType.TEXT})
  description: string;

  @HasMany(() => Player)
  players: Player[]

  @BelongsToMany(() => Tournament, () => TeamTournament)
  tournaments: Tournament[]

  @BelongsToMany(() => Game, () => GameTeam)
  games: Game[]
}
