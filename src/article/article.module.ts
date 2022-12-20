import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Article } from "./models/article.model";

@Module({
  controllers: [ArticleController],
  imports: [
    SequelizeModule.forFeature([Article]),
  ],
  providers: [ArticleService],
  exports: [
    ArticleService
  ]
})
export class ArticleModule {}
