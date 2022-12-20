import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Timetable} from "./models/timetable.model";
import {CreateTimetableDto} from "./dto/create-timetable.dto";

@Injectable()
export class TimetableService {
  constructor(
    @InjectModel(Timetable)
    private timetableRepository: typeof Timetable
  ) {}

  async getTimetables() {
    return await this.timetableRepository.findAll();
  }

  async createTimetable(dto: CreateTimetableDto) {
    return await this.timetableRepository.create(dto)
  }
}
