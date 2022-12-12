import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Timetable} from "./models/timetable.model";
import {CreateTimetableDto} from "./dto/create-timetable.dto";
import {Tournament} from "../tournament/models/tournament.model";

@Injectable()
export class TimetableService {
  constructor(
    @InjectModel(Timetable)
    private timetableRepository: typeof Timetable
  ) {}

  async getTimetables() {
    return await this.timetableRepository.findAll({include: Tournament});
  }

  async createTimetable(dto: CreateTimetableDto) {
    return await this.timetableRepository.create(dto)
  }
}
