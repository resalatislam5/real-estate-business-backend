import mongoose, { Document } from "mongoose";
export declare class RefreshToken extends Document {
    token: string;
    userId: mongoose.Types.ObjectId;
    expireDate: Date;
}
export declare const RefreshTokenScheme: mongoose.Schema<RefreshToken, mongoose.Model<RefreshToken, any, any, any, mongoose.Document<unknown, any, RefreshToken, any, {}> & RefreshToken & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, RefreshToken, mongoose.Document<unknown, {}, mongoose.FlatRecord<RefreshToken>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<RefreshToken> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
