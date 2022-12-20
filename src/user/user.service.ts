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

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({where: {email}})
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto)
  }
}

