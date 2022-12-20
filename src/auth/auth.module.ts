import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";
import { AppConfigModule } from "../app-config/app-config.module";

@Module({
  imports: [
    AppConfigModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
