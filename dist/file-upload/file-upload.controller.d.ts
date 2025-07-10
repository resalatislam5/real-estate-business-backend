import { FileUploadService } from "./file-upload.service";
export declare class FileUploadController {
    private readonly FileUploadService;
    constructor(FileUploadService: FileUploadService);
    create(file: Express.Multer.File): Promise<{
        path: string;
    }>;
}
