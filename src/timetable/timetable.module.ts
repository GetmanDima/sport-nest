import { Module } from '@nestjs/common';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Timetable} from "./models/timetable.model";

@Module({
  controllers: [TimetableController],
  imports: [
    SequelizeModule.forFeature([Timetable]),
  ],
  providers: [TimetableService],
  exports: [
    TimetableService,
  ]
})
export class TimetableModule {}
