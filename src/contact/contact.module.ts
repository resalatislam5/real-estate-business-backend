import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { LiveChatGateway } from "./live-chat/live-chat.gateway";
import { Contact, ContactSchema } from "./schema/contact.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    AuthModule,
  ],
  controllers: [ContactController],
  providers: [ContactService, LiveChatGateway],
})
export class ContactModule {}
