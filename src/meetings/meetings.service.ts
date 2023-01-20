import { Injectable } from '@nestjs/common';
import { GetMeetingResponseDTO } from './dto';
import { CreateMeetingRequestDTO } from './dto/CreateMeetingRequestDTO';

@Injectable()
export class MeetingsService {
  getMeetingById(meetingId: string): GetMeetingResponseDTO {
    return null;
  }

  createNewMeeting(createMeetingDto: CreateMeetingRequestDTO) {
    return null;
  }
}
