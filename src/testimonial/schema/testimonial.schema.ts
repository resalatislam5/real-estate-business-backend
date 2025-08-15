import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Testimonial extends Document {
  @Prop({ required: true, trim: true })
  image: String;

  @Prop({ required: true, trim: true })
  name: String;

  @Prop({ required: true, trim: true })
  profession: String;

  @Prop({ required: true, trim: true })
  description: String;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
