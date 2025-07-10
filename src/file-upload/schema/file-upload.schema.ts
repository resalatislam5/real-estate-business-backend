import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class FileUpload extends Document {
  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  contentType: string;

  @Prop({ required: true })
  base64Data: string;
}

export const FileUploadSchema = SchemaFactory.createForClass(FileUpload);
