import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Vendor extends Document {
    @Prop({
        required: true,
        default: () => +`${Date.now()}${Math.floor(100 + Math.random() * 900)}`,
        unique: true,
        type: Number,
    })
    uid: number;

    @Prop({ required: true, unique: true })
    vendorName: string;

    @Prop({ required: true })
    contactPersonName: string;

    @Prop()
    designation: string;

    @Prop({ required: true })
    cid: number;

    @Prop({ required: true })
    email: string;

    @Prop()
    telephoneNumber: string;

    @Prop({ required: true })
    mobileNumber: string;

    @Prop()
    websiteUrl: string;

    @Prop({ required: true })
    streetAddress: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    stateProvince: string;

    @Prop({ required: true })
    zipPostalCode: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    businessType: string;

    @Prop({ required: true })
    servicesOffered: string;

    @Prop({ required: true })
    establishedDate: string;

    @Prop({ required: true })
    yearsInBusiness: string;

    @Prop({ required: true })
    reputation: string;

    @Prop({ required: true })
    businessLicenseNumber: string;

    @Prop({ required: true })
    taxIdVatNumber: string;

    @Prop({ required: true })
    bankName: string;

    @Prop({ required: true })
    bankAccountNumber: string;

    @Prop({ required: true })
    paymentTerms: string;

    @Prop({ required: true })
    preferredPaymentMethod: string;

    @Prop({ required: true })
    creditLimit: string;

    @Prop()
    clientReferences: string;

    @Prop()
    previousProjectExamples: string;

    @Prop()
    relevantCertifications: string;

    @Prop()
    complianceDocuments: string;

    @Prop()
    healthSafetyPolicies: string;

    @Prop()
    specialRequirements: string;

    @Prop()
    additionalNotesComments: string;

    @Prop({ type: [{ fieldName: String, fieldValue: String }] })
    additionalFields: Array<{ fieldName: string; fieldValue: string }>;

    @Prop({ type: [{ productName: String }] })
    products: Array<{ productName: string }>;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
