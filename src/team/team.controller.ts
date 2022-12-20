import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import {TeamService} from "./team.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {BindPlayerDto} from "./dto/bind-player.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RoleGuard } from "../guards/role.guard";

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

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post("/:teamName/participating-players/:playerId")
  bindPlayer(@Param() params: BindPlayerDto) {
    return this.teamService.bindPlayerToTeam(params);
  }

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }
}
