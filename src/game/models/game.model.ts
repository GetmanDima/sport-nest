import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import {Team} from "../../team/models/team.model";
import { Tournament } from "../../tournament/models/tournament.model";
import { GameTeam } from "../dto/game-team.model";

interface GameCreationAttrs {
  tournamentName: string
  date: Date
}

@Table({tableName: 'games', timestamps: false})
export class Game extends Model<Game, GameCreationAttrs> {
  @Column({type: DataType.DATE, allowNull: false})
  date: Date;

  @ForeignKey(() => Tournament)
  @Column({type: DataType.STRING})
  tournamentName: string;

  @BelongsTo(() => Tournament)
  tournament: Tournament

  @BelongsToMany(() => Team, () => GameTeam)
  teams: Team[]
}
