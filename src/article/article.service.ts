import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Article} from "./models/article.model";
import { CreateArticleDto } from "./dto/create-article.dto";

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article)
    private articleRepository: typeof Article
  ) {}

  async getTournamentArticles(tournamentName: string) {
    return await this.articleRepository.findAll({where: {tournamentName}});
  }

  async getArticle(articleName: string) {
    return await this.articleRepository.findByPk(articleName)
  }

  async createArticle(dto: CreateArticleDto) {
    return await this.articleRepository.create(dto)
  }
}
