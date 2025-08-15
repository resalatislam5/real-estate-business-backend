import { CloudinaryService } from "./cloudinary.service";
export declare class CloudinaryController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File, folder: string): Promise<any>;
    deleteImage(publicId: string): Promise<void>;
}
