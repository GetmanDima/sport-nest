import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TournamentService} from "./tournament.service";
import {CreateTournamentDto} from "./dto/create-tournament.dto";
import {BindTeamDto} from "./dto/bind-team.dto";

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

  @Post('/:tournamentName/teams/:teamName')
  bindTeam(@Param() params: BindTeamDto) {
    return this.tournamentService.bindTeamToTournament(params);
  }

  @Post()
  create(@Body() dto: CreateTournamentDto) {
    return this.tournamentService.createTournament(dto);
  }
}
