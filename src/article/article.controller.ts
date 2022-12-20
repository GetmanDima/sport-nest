import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleBodyDto } from "./dto/create-article-body.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller()
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/tournaments/:tournamentName/articles')
  getAll(@Param('tournamentName') tournamentName: string) {
    return this.articleService.getTournamentArticles(tournamentName);
  }

  @Get("/articles/:articleName")
  getOne(@Param('articleName') articleName: string) {
    return this.articleService.getArticle(articleName);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/tournaments/:tournamentName/articles')
  create(@Param('tournamentName') tournamentName: string,
         @Body() dto: CreateArticleBodyDto,
         @Request() req) {
    return this.articleService.createArticle({...dto, authorNickname: req.user.nickname, tournamentName});
  }
}
