import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/auth/schema/user.schema";
import { createProperties } from "src/properties/schema/create-properties.schema";

@Schema()
export class Wishlist extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, require: true })
  userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, require: true })
  propertyId: createProperties;
}

export const wishlistSchema = SchemaFactory.createForClass(Wishlist);
