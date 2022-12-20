import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Game } from "./game.model";
import { Team } from "../../team/models/team.model";

@Table({tableName: 'games_teams', timestamps: false})
export class GameTeam extends Model<GameTeam> {
  @ForeignKey(() => Team)
  @Column({type: DataType.STRING, primaryKey: true})
  teamName: string;

  @ForeignKey(() => Game)
  @Column({type: DataType.NUMBER, primaryKey: true})
  gameId: number;
}
