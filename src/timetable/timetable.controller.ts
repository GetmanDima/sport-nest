import {Body, Controller, Get, Post, Render} from '@nestjs/common';
import {TimetableService} from "./timetable.service";
import {CreateTimetableDto} from "./dto/create-timetable.dto";

@Controller('timetables')
export class TimetableController {
  constructor(private timetableService: TimetableService) {}

  @Get()
  @Render('timetables')
  async getAll() {
    const timetables = await this.timetableService.getTimetables();
    const viewTimetables = timetables.map((timetable) => {
      return {
        name: timetable.name,
        tournamentName: timetable.tournamentName,
        startDate: timetable.startDate.toISOString(),
        finishDate: timetable.finishDate.toISOString()
      }
    })
    return {timetables: viewTimetables}
  }

  @Post()
  create(@Body() dto: CreateTimetableDto) {
    return this.timetableService.createTimetable(dto);
  }
}
