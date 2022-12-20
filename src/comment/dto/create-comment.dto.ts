import { CreateCommentBodyDto } from "./create-comment-body.dto";

export class CreateCommentDto extends CreateCommentBodyDto {
  readonly articleName: string
  readonly authorNickname: string
}
