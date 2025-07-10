import { Socket } from "socket.io";
export declare class LiveChatGateway {
    handleMessage(client: Socket, payload: any): {
        message: string;
    };
}
