import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Comment} from "./models/comment.model";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment)
    private commentRepository: typeof Comment
  ) {}

  async getArticleComments(articleName: string) {
    return await this.commentRepository.findAll({where: {articleName}})
  }

  async createComment(dto: CreateCommentDto) {
    return await this.commentRepository.create(dto)
  }
}
