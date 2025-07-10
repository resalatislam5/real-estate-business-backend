import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false, timestamps: true })
export class Contact extends Document {
  @Prop({ required: true, trim: true })
  name: string;
  @Prop({ required: true, trim: true })
  number: string;

  @Prop({ required: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  message: string;
  @Prop({ default: false })
  seen: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
