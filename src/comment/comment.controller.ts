import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { CreateCommentBodyDto } from "./dto/create-comment-body.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CommentService } from "./comment.service";

@Controller('/articles/:articleName/comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  getAll(@Param('articleName') articleName: string) {
    return this.commentService.getArticleComments(articleName);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Param('articleName') articleName: string,
         @Body() dto: CreateCommentBodyDto,
         @Request() req) {
    return this.commentService.createComment({
      ...dto, articleName, authorNickname: req.user.nickname
    });
  }
}
