import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    type: String,
    enum: ["admin", "user"],
    default: "user",
  })
  role: string;

  @Prop({ default: null })
  number: string;

  @Prop({ default: null })
  address: string;

  @Prop({ default: null })
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
