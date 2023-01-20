import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMeetingRequestDTO } from './dto/CreateMeetingRequestDTO';
import { MeetingsService } from './meetings.service';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Get(':id')
  getMeetingById(@Param('id') id: string) {
    return this.meetingsService.getMeetingById(id);
  }

  @Post()
  createMeeting(@Body() createMeetingDto: CreateMeetingRequestDTO) {
    this.meetingsService.createNewMeeting(createMeetingDto);
  }
}
