import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Team} from "./team.model";
import {Tournament} from "../../tournament/models/tournament.model";

@Table({tableName: 'teams_tournaments', timestamps: false})
export class TeamTournament extends Model<TeamTournament> {
  @ForeignKey(() => Team)
  @Column({type: DataType.STRING, primaryKey: true})
  teamName: number;

  @ForeignKey(() => Tournament)
  @Column({type: DataType.STRING, primaryKey: true})
  tournamentName: string;
}
