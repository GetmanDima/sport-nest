import { IsOptional, IsString } from "class-validator";

export class CreatePlayerDto {
  @IsString()
  readonly surname: string

  @IsString()
  readonly name: string

  @IsString()
  readonly patronymic: string

  @IsString() @IsOptional()
  readonly teamName: string
}
