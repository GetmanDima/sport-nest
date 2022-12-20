import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import {TimetableService} from "./timetable.service";
import {CreateTimetableDto} from "./dto/create-timetable.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RoleGuard } from "../guards/role.guard";

@Controller('timetables')
export class TimetableController {
  constructor(private timetableService: TimetableService) {}

  @Get()
  getAll() {
    return this.timetableService.getTimetables();
  }

  @UseGuards(JwtAuthGuard, new RoleGuard('admin'))
  @Post()
  create(@Body() dto: CreateTimetableDto) {
    return this.timetableService.createTimetable(dto);
  }
}
