import { IsString } from "class-validator";

export class CreateCommentBodyDto {
  @IsString()
  readonly content: string
}
