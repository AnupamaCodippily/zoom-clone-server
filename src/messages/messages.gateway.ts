import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';


  @WebSocketGateway({ path: '/rooms/', cors: true })
  export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server;
    users: number = 0;
    async handleConnection() {
      // A client has connected
      this.users++;
      // Notify connected clients of current users
      this.server.emit('users', this.users);
    }
    async handleDisconnect() {
      // A client has disconnected
      this.users--;
      // Notify connected clients of current users
      this.server.emit('users', this.users);
    }

    @SubscribeMessage('client-send-message-to-server')
    async onChat(client, message) {
      client.broadcast.emit('server-send-messages-to-clients', message);
    }
  }