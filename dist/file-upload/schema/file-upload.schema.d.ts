import { Document } from "mongoose";
export declare class FileUpload extends Document {
    folderName: string;
    fileName: string;
    contentType: string;
    base64Data: string;
}
export declare const FileUploadSchema: import("mongoose").Schema<FileUpload, import("mongoose").Model<FileUpload, any, any, any, Document<unknown, any, FileUpload, any, {}> & FileUpload & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FileUpload, Document<unknown, {}, import("mongoose").FlatRecord<FileUpload>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FileUpload> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
