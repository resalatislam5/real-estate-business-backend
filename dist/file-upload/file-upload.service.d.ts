import { Response } from "express";
import { Model } from "mongoose";
import { FileUpload } from "./schema/file-upload.schema";
export declare class FileUploadService {
    private fileUploadModel;
    constructor(fileUploadModel: Model<FileUpload>);
    create(file: Express.Multer.File, folder: string): Promise<{
        path: string;
    }>;
    findOne(_id: string, res: Response): Promise<void>;
}
