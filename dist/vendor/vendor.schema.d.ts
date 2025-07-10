import { Document } from 'mongoose';
export declare class Vendor extends Document {
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
    additionalFields: Array<{
        fieldName: string;
        fieldValue: string;
    }>;
    products: Array<{
        productName: string;
    }>;
}
export declare const VendorSchema: import("mongoose").Schema<Vendor, import("mongoose").Model<Vendor, any, any, any, Document<unknown, any, Vendor> & Vendor & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Vendor, Document<unknown, {}, import("mongoose").FlatRecord<Vendor>> & import("mongoose").FlatRecord<Vendor> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
