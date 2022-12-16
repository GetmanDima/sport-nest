import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TeamService} from "./team.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {BindPlayerDto} from "./dto/bind-player.dto";

@Controller('teams')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  getAll() {
    return this.teamService.getTeams();
  }

  @Get("/:teamName")
  getOne(@Param('teamName') teamName: string) {
    return this.teamService.getTeam(teamName);
  }

  @Post("/:teamName/players/:playerId")
  bindPlayer(@Param() params: BindPlayerDto) {
    return this.teamService.bindPlayerToTeam(params);
  }

  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }
}
