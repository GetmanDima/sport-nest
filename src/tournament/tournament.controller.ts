import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import {TournamentService} from "./tournament.service";
import {CreateTournamentDto} from "./dto/create-tournament.dto";
import {BindTeamDto} from "./dto/bind-team.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RoleGuard } from "../guards/role.guard";

@Controller('tournaments')
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Get()
  getAll() {
    return this.tournamentService.getTournaments();
  }

  @Get('/:tournamentName')
  getOne(@Param('tournamentName') tournamentName: string) {
    return this.tournamentService.getTournament(tournamentName);
  }

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post('/:tournamentName/participating-teams/:teamName')
  bindTeam(@Param() params: BindTeamDto) {
    return this.tournamentService.bindTeamToTournament(params);
  }

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post()
  create(@Body() dto: CreateTournamentDto) {
    return this.tournamentService.createTournament(dto);
  }
}
