import {Injectable} from '@nestjs/common';
import {Tournament} from "./models/tournament.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateTournamentDto} from "./dto/create-tournament.dto";
import {BindTeamDto} from "./dto/bind-team.dto";
import {Team} from "../team/models/team.model";
import { Game } from "../game/models/game.model";

@Injectable()
export class TournamentService {
  constructor(
    @InjectModel(Tournament)
    private tournamentRepository: typeof Tournament
  ) {}

  async getTournaments() {
    return await this.tournamentRepository.findAll();
  }

  async getTournament(tournamentName: string) {
    return await this.tournamentRepository.findByPk(tournamentName, {
      include: [
        {model: Team, attributes: ['name'], through: {attributes: []} },
        {
          model: Game,
          attributes: {exclude: ["tournamentName"]},
          include: [{model: Team, attributes: ['name'], through: {attributes: []}}]
        }
      ]}
    );
  }

  async createTournament(dto: CreateTournamentDto) {
    return await this.tournamentRepository.create(dto)
  }

  async bindTeamToTournament(dto: BindTeamDto) {
    const tournament = await this.tournamentRepository.findByPk(dto.tournamentName)
    await tournament.$add('teams', dto.teamName)

    return tournament
  }
}
