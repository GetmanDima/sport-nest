import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { Article } from "../../article/models/article.model";

interface CommentCreationAttrs {
  content: string,
  articleName: string
  authorNickname: string,
}

@Table({tableName: 'comments', timestamps: false})
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @ForeignKey(() => Article)
  @Column({type: DataType.STRING, primaryKey: true})
  articleName: string;

  @ForeignKey(() => User)
  @Column({type: DataType.STRING, primaryKey: true})
  authorNickname: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @Column({type: DataType.DATE, defaultValue: Date.now})
  createdAt: Date;

  @BelongsTo(() => User)
  author: User

  @BelongsTo(() => Article)
  article: Article
}
