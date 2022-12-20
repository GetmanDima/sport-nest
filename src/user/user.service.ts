import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User
  ) {}

  async getUserByNickname(nickname: string) {
    return await this.userRepository.findOne({where: {nickname}})
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto)
  }
}

