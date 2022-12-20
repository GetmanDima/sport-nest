import { IsOptional, IsString } from "class-validator";

export class CreateTournamentDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly organization: string;

  @IsString() @IsOptional()
  readonly description: string;
}
