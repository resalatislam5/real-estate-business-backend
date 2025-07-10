export declare class FileUploadService {
    create(file: Express.Multer.File): Promise<{
        path: string;
    }>;
}
