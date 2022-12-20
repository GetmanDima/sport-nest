import { CreateArticleBodyDto } from "./create-article-body.dto";

export class CreateArticleDto extends CreateArticleBodyDto {
  readonly authorNickname: string
  readonly tournamentName: string
}
