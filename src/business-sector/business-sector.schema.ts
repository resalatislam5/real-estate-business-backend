import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class BusinessSector extends Document {
  @Prop({
    required: true,
    default: () => +`${Date.now()}${Math.floor(100 + Math.random() * 900)}`,
    unique: true,
    type: Number,
  })
  uid: number;

  @Prop({ required: true })
  cid: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  businessSectorName: string;

  @Prop()
  code: string;

  @Prop({
    enum: ['active', 'inactive', 'closed'],
  })
  status: string;
}

export const BusinessSectorSchema = SchemaFactory.createForClass(BusinessSector);
