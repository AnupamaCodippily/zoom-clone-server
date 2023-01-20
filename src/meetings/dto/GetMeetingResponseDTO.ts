export class GetMeetingResponseDTO {
  meetingId: string;
  meetingTitle: string;
  meetingSettings: {
    participantsMutedByDefault: boolean;
  };
}
