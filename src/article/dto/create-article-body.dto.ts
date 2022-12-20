import { IsString } from "class-validator";

export class CreateArticleBodyDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly content: string
}
