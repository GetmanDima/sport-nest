import { IsArray, IsDate } from "class-validator";

export class CreateGameDto {
  @IsArray()
  readonly teams: string[]

  @IsDate()
  readonly date: Date
}
