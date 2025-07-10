import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { Request } from "express";
import { diskStorage } from "multer";

import { AuthModule } from "src/auth/auth.module";
import { FileUploadController } from "./file-upload.controller";
import { FileUploadService } from "./file-upload.service";
import { FileUpload, FileUploadSchema } from "./schema/file-upload.schema";
import * as fs from "fs";
import * as path from "path";
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileUpload.name, schema: FileUploadSchema },
    ]),
    AuthModule,
    MulterModule.register({
      storage: diskStorage({
        destination: (req: Request, file, cb) => {
          const rawFolder = req.query.folder?.toString() || "default";

          // Strip slashes and prevent path traversal
          const safeFolder = rawFolder.replace(/(\.\.\/|\/|\\)/g, "");

          // Join with backend's upload directory
          const uploadPath = path.join(
            // __dirname,
            // "..",
            // "..",
            "uploads",
            safeFolder
          );

          // Create the directory if it doesn't exist
          fs.mkdirSync(uploadPath, { recursive: true });

          cb(null, uploadPath);
        },
        filename: (_, file, cb) => {
          const fileName = Date.now() + "-" + file.originalname;
          cb(null, fileName);
        },
      }),
      // save image in database
      // storage: memoryStorage(),
    }),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class FileUploadModule {}
