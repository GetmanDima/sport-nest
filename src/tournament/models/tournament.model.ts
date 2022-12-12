import {Table, Column, Model, DataType, BelongsTo, HasOne, BelongsToMany} from 'sequelize-typescript';
import {Timetable} from "../../timetable/models/timetable.model";
import {TeamTournament} from "../../team/models/team-tournament.model";
import {Team} from "../../team/models/team.model";

interface TournamentCreationAttrs {
  name: string;
  organization: string;
  description: string;
}

@Table({tableName: 'tournaments', timestamps: false})
export class Tournament extends Model<Tournament, TournamentCreationAttrs> {
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  name: string;

  @Column({type: DataType.STRING, allowNull: false})
  organization: string;

  @Column({type: DataType.TEXT})
  description: string;

  @Column({type: DataType.DATE, defaultValue: Date.now})
  createdAt: Date;

  @HasOne(() => Timetable)
  timetable: Timetable

  @BelongsToMany(() => Team, () => TeamTournament)
  teams: Team[]
}
