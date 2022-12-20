import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";

@Module({
  controllers: [UserController],
  imports: [
    SequelizeModule.forFeature([User]),
  ],
  providers: [UserService],
  exports: [
    UserService
  ]
})
export class UserModule {}
