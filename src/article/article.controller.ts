import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleBodyDto } from "./dto/create-article-body.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('/tournaments/:tournamentName/articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getAll(@Param('tournamentName') tournamentName: string) {
    return this.articleService.getTournamentArticles(tournamentName);
  }

  @Get("/:articleName")
  getOne(@Param('articleName') articleName: string) {
    return this.articleService.getArticle(articleName);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Param('tournamentName') tournamentName: string,
         @Body() dto: CreateArticleBodyDto,
         @Request() req) {
    return this.articleService.createArticle({...dto, authorNickname: req.user.nickname, tournamentName});
  }
}
