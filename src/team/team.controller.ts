import {Body, Controller, Get, Param, Post, Render} from '@nestjs/common';
import {TeamService} from "./team.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {BindPlayerDto} from "./dto/bind-player.dto";

@Controller('teams')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  @Render('teams')
  async getAll() {
    const teams = await this.teamService.getTeams();
    const viewTeams = teams.map((team) => {
      return {
        name: team.name,
        description: team.description ? team.description.substring(0, 20) + "..." : ""
      }
    })
    return {teams: viewTeams}
  }

  @Get("/:teamName")
  @Render('single-team')
  async getOne(@Param('teamName') teamName: string) {
    const team = await this.teamService.getTeam(teamName);
    return {team}
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
