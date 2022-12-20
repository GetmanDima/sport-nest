import {Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Tournament} from "../../tournament/models/tournament.model";

interface TimetableCreationAttrs {
  name: string;
  startDate: Date;
  finishDate: Date;
  tournamentName: string
}

@Table({tableName: 'timetables', timestamps: false})
export class Timetable extends Model<Timetable, TimetableCreationAttrs> {
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  name: string;

  @Column({type: DataType.DATE})
  startDate: Date;

  @Column({type: DataType.DATE})
  finishDate: Date;

  @ForeignKey(() => Tournament)
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  tournamentName: string;

  @BelongsTo(() => Tournament)
  tournament: Tournament
}
