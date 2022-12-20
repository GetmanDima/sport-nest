import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(nickname: string, password: string): Promise<any> {
    const user = await this.userService.getUserByNickname(nickname);
    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const { nickname, type } = user.dataValues;
      return {nickname, type};
    }

    return null;
  }

  async login(user: any) {
    const payload = { nickname: user.nickname, type: user.type };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(dto: RegisterDto) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(dto.password, salt)
    return await this.userService.createUser({
      ...dto, password: passwordHash, type: 'user'
    })
  }
}
