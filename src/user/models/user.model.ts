import { Table, Column, Model, DataType } from "sequelize-typescript";

interface UserCreationAttrs {
  nickname: string;
  email: string;
  password: string;
  type: string
}

@Table({tableName: 'users', timestamps: false})
export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.STRING, primaryKey: true})
  nickname: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @Column({type: DataType.STRING, allowNull: false})
  type: string;
}
