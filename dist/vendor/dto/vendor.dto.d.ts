declare class AdditionalFieldDto {
    _id?: string;
    fieldName: string;
    fieldValue: string;
}
declare class ProductDto {
    _id?: string;
    productName: string;
}
export declare class CreateVendorDto {
    _id?: string;
    __v?: number;
    uid: number;
    vendorName: string;
    contactPersonName: string;
    designation: string;
    cid: number;
    email: string;
    telephoneNumber: string;
    mobileNumber: string;
    websiteUrl: string;
    streetAddress: string;
    city: string;
    stateProvince: string;
    zipPostalCode: string;
    country: string;
    businessType: string;
    servicesOffered: string;
    establishedDate: string;
    yearsInBusiness: string;
    reputation: string;
    businessLicenseNumber: string;
    taxIdVatNumber: string;
    bankName: string;
    bankAccountNumber: string;
    paymentTerms: string;
    preferredPaymentMethod: string;
    creditLimit: string;
    clientReferences: string;
    previousProjectExamples: string;
    relevantCertifications: string;
    complianceDocuments: string;
    healthSafetyPolicies: string;
    specialRequirements: string;
    additionalNotesComments: string;
    additionalFields: AdditionalFieldDto[];
    products: ProductDto[];
}
declare const UpdateVendorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVendorDto>>;
export declare class UpdateVendorDto extends UpdateVendorDto_base {
    uid: number;
    createdAt: Date;
    updatedAt: Date;
    _id?: string;
    __v?: number;
}
export {};
