import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { Tournament } from "../../tournament/models/tournament.model";

interface ArticleCreationAttrs {
  name: string,
  content: string,
  authorNickname: string,
  tournamentName: string
}

@Table({tableName: 'articles', timestamps: false})
export class Article extends Model<Article, ArticleCreationAttrs> {
  @Column({type: DataType.STRING, primaryKey: true})
  name: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @Column({type: DataType.DATE, defaultValue: Date.now})
  createdAt: Date;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, allowNull: false})
  authorNickname: string;

  @ForeignKey(() => Tournament)
  @Column({type: DataType.STRING, allowNull: false})
  tournamentName: string;

  @BelongsTo(() => User)
  author: User

  @BelongsTo(() => Tournament)
  tournament: Tournament
}
