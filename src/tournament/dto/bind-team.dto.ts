import { IsString } from "class-validator";

export class BindTeamDto {
  @IsString()
  readonly tournamentName: string;

  @IsString()
  readonly teamName: string;
}
