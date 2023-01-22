import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingsModule } from './meetings/meetings.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MeetingsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
