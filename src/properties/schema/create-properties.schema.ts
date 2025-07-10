import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/auth/schema/user.schema";

@Schema({ timestamps: true })
export class createProperties extends Document {
  @Prop({ require: true, trim: true })
  title: string;

  @Prop({ require: true, trim: true })
  price: number;

  @Prop({ require: true, trim: true })
  sq_ft: number;

  @Prop({ require: true, trim: true })
  property_type: string;

  @Prop({ require: true, trim: true })
  address: string;

  @Prop({ require: true, trim: true })
  baths: number;

  @Prop({ require: true, trim: true })
  beds: number;

  @Prop({ require: true, trim: true })
  city: string;

  @Prop({ require: true, trim: true })
  year_built: number;

  @Prop({ require: true, trim: true })
  description: string;

  @Prop({ require: true, trim: true })
  garage: number;

  @Prop({ require: true, trim: true })
  garage_size: number;

  @Prop({ require: true, trim: true })
  property_status: string;

  @Prop({ require: true, trim: true })
  division: string;

  @Prop({ require: true, trim: true })
  zip_code: number;

  @Prop({ require: true, trim: true })
  country: string;

  @Prop({ require: true, trim: true })
  video: string;

  @Prop({ require: true })
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  creator: User;
}

export const createPropertiesSchema =
  SchemaFactory.createForClass(createProperties);
