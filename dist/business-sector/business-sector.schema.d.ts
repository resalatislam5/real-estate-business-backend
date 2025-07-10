import { Document } from 'mongoose';
export declare class BusinessSector extends Document {
    uid: number;
    cid: number;
    email: string;
    businessSectorName: string;
    code: string;
    status: string;
}
export declare const BusinessSectorSchema: import("mongoose").Schema<BusinessSector, import("mongoose").Model<BusinessSector, any, any, any, Document<unknown, any, BusinessSector> & BusinessSector & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BusinessSector, Document<unknown, {}, import("mongoose").FlatRecord<BusinessSector>> & import("mongoose").FlatRecord<BusinessSector> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
