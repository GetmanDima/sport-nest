import {Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Team} from "../../team/models/team.model";

interface PlayerCreationAttrs {
  surname: string
  name: string
  patronymic: string
  birthday: Date
  teamName: string
}

@Table({tableName: 'players', timestamps: false})
export class Player extends Model<Player, PlayerCreationAttrs> {
  @Column({type: DataType.STRING, allowNull: false})
  surname: string;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING})
  patronymic: string;

  @Column({type: DataType.DATEONLY, allowNull: false})
  birthday: Date;

  @ForeignKey(() => Team)
  @Column({type: DataType.STRING})
  teamName: string;

  @BelongsTo(() => Team)
  team: Team
}
