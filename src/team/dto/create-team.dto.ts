import { IsOptional, IsString } from "class-validator";

export class CreateTeamDto {
  @IsString()
  readonly name: string;

  @IsString() @IsOptional()
  readonly description: string
}
