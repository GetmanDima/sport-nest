import { IsOptional, IsString } from "class-validator";

export class CreateTimetableDto {
  @IsString()
  readonly name: string;

  @IsString() @IsOptional()
  readonly startDate: Date;

  @IsString() @IsOptional()
  readonly finishDate: Date;

  @IsString()
  readonly tournamentName: string
}
