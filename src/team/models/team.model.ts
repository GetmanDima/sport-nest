import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasOne,
  HasMany
} from 'sequelize-typescript';
import {Tournament} from "../../tournament/models/tournament.model";
import {TeamTournament} from "./team-tournament.model";
import {Timetable} from "../../timetable/models/timetable.model";
import {Player} from "../../player/models/player.model";

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
}
