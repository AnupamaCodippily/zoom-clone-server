import { Module } from '@nestjs/common';
import { MessagesGateway } from './messages.gateway';

@Module({
  imports: [MessagesGateway],
  providers: [MessagesGateway],
})
export class MessagesModule {}
