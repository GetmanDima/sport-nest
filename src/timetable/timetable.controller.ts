import {Body, Controller, Get, Post} from '@nestjs/common';
import {TimetableService} from "./timetable.service";
import {CreateTimetableDto} from "./dto/create-timetable.dto";

@Controller('timetables')
export class TimetableController {
  constructor(private timetableService: TimetableService) {}

  @Get()
  getAll() {
    return this.timetableService.getTimetables();
  }

  @Post()
  create(@Body() dto: CreateTimetableDto) {
    return this.timetableService.createTimetable(dto);
  }
}
