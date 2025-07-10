import { IsString, IsNumber, IsArray, ValidateNested, Allow, IsOptional, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class AdditionalFieldDto {
    @Allow()
    _id?: string;

    @IsString()
    fieldName: string;

    @IsString()
    fieldValue: string;
}

class ProductDto {
    @Allow()
    _id?: string;

    @IsString()
    productName: string;
}

export class CreateVendorDto {
    @Allow()
    _id?: string;

    @Allow()
    __v?: number;

    @Allow()
    uid: number;

    @IsString()
    vendorName: string;

    @IsString()
    contactPersonName: string;

    @IsString()
    designation: string;

    @IsNumber()
    cid: number;

    @IsString()
    email: string;

    @IsString()
    telephoneNumber: string;

    @IsString()
    mobileNumber: string;

    @IsString()
    websiteUrl: string;

    @IsString()
    streetAddress: string;

    @IsString()
    city: string;

    @IsString()
    stateProvince: string;

    @IsString()
    zipPostalCode: string;

    @IsString()
    country: string;

    @IsString()
    businessType: string;

    @IsString()
    servicesOffered: string;

    @IsString()
    establishedDate: string;

    @IsString()
    yearsInBusiness: string;

    @IsString()
    reputation: string;

    @IsString()
    businessLicenseNumber: string;

    @IsString()
    taxIdVatNumber: string;

    @IsString()
    bankName: string;

    @IsString()
    bankAccountNumber: string;

    @IsString()
    paymentTerms: string;

    @IsString()
    preferredPaymentMethod: string;

    @IsString()
    creditLimit: string;

    @IsString()
    clientReferences: string;

    @IsString()
    previousProjectExamples: string;

    @IsString()
    relevantCertifications: string;

    @IsString()
    complianceDocuments: string;

    @IsString()
    healthSafetyPolicies: string;

    @IsString()
    specialRequirements: string;

    @IsString()
    additionalNotesComments: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AdditionalFieldDto)
    additionalFields: AdditionalFieldDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductDto)
    products: ProductDto[];
}

export class UpdateVendorDto extends PartialType(CreateVendorDto) {
    @IsNumber()
    @IsNotEmpty({ message: 'Uid is Required!' })
    uid: number;

    @Allow()
    createdAt: Date;

    @Allow()
    updatedAt: Date;

    @Allow()
    _id?: string;

    @Allow()
    __v?: number;
}
