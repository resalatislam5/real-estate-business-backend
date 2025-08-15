import { FileUploadService } from "./file-upload.service";
import { Response } from "express";
export declare class FileUploadController {
    private readonly FileUploadService;
    constructor(FileUploadService: FileUploadService);
    create(file: Express.Multer.File, folder: string): Promise<{
        path: string;
    }>;
    findOne(id: string, res: Response): Promise<void>;
    remove(id: String): Promise<void>;
}
