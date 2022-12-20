import { IsInt, IsString, Min } from "class-validator";

export class BindPlayerDto {
  @IsString()
  readonly teamName: string;

  @IsInt() @Min(1)
  readonly playerId: number
}
