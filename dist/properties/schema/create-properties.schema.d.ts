import mongoose, { Document } from "mongoose";
import { User } from "src/auth/schema/user.schema";
export declare class createProperties extends Document {
    title: string;
    price: number;
    sq_ft: number;
    property_type: string;
    address: string;
    baths: number;
    beds: number;
    city: string;
    year_built: number;
    description: string;
    garage: number;
    garage_size: number;
    property_status: string;
    division: string;
    zip_code: number;
    country: string;
    video: string;
    image: string;
    creator: User;
}
export declare const createPropertiesSchema: mongoose.Schema<createProperties, mongoose.Model<createProperties, any, any, any, mongoose.Document<unknown, any, createProperties> & createProperties & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, createProperties, mongoose.Document<unknown, {}, mongoose.FlatRecord<createProperties>> & mongoose.FlatRecord<createProperties> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
