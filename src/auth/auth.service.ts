import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);

    if (user && user.password === password) {
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
    return await this.userService.createUser({...dto, type: 'user'})
  }
}
