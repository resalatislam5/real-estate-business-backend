import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway(8080, { cors: "*" })
export class LiveChatGateway {
  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: any) {
    console.log(client.id, payload);

    return { message: "Hello world!" };
  }
}
