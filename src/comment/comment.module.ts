import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { CommentController } from "./comment.controller";
import { Comment } from "./models/comment.model";
import { CommentService } from "./comment.service";

@Module({
  controllers: [CommentController],
  imports: [
    SequelizeModule.forFeature([Comment]),
  ],
  providers: [CommentService],
  exports: [
    CommentService
  ]
})
export class CommentModule {}
