import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Team} from "./models/team.model";
import {CreateTeamDto} from "./dto/create-team.dto";
import {BindPlayerDto} from "./dto/bind-player.dto";
import {Player} from "../player/models/player.model";

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team)
    private teamRepository: typeof Team
  ) {}

  async getTeams() {
    return await this.teamRepository.findAll();
  }

  async getTeam(teamName: string) {
    return await this.teamRepository.findByPk(teamName, {include: Player})
  }

  async createTeam(dto: CreateTeamDto) {
    return await this.teamRepository.create(dto)
  }

  async bindPlayerToTeam(dto: BindPlayerDto) {
    const team = await this.teamRepository.findByPk(dto.teamName)
    await team.$add('players', dto.playerId)

    return team
  }
}
