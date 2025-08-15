import { Document } from "mongoose";
export declare class Contact extends Document {
    name: string;
    number: string;
    email: string;
    message: string;
    seen: boolean;
}
export declare const ContactSchema: import("mongoose").Schema<Contact, import("mongoose").Model<Contact, any, any, any, Document<unknown, any, Contact, any, {}> & Contact & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contact, Document<unknown, {}, import("mongoose").FlatRecord<Contact>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Contact> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
