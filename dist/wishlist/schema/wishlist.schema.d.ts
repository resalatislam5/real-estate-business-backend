import mongoose, { Document } from "mongoose";
import { User } from "src/auth/schema/user.schema";
import { createProperties } from "src/properties/schema/create-properties.schema";
export declare class Wishlist extends Document {
    userId: User;
    propertyId: createProperties;
}
export declare const wishlistSchema: mongoose.Schema<Wishlist, mongoose.Model<Wishlist, any, any, any, mongoose.Document<unknown, any, Wishlist> & Wishlist & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Wishlist, mongoose.Document<unknown, {}, mongoose.FlatRecord<Wishlist>> & mongoose.FlatRecord<Wishlist> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
