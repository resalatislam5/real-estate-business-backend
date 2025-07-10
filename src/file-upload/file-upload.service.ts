import {
  // ForbiddenException,
  Injectable,
  // InternalServerErrorException,
  // Logger,
} from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { FileUpload } from "./schema/file-upload.schema";
// import { Model } from "mongoose";
// import { Response } from "express";
// import { join } from "path";
// import { existsSync } from "fs";

@Injectable()
export class FileUploadService {
  // constructor(
  //   @InjectModel(FileUpload.name)
  //   private fileUploadModel: Model<FileUpload>
  // ) {}

  async create(file: Express.Multer.File) {
    console.log("file", file);
    return { path: `/${file.destination}/${file.filename}` };
    // file upload in mongodb / database
    // if (!file) {
    //   throw new ForbiddenException("Please  upload a valid file");
    // }
    // try {
    //   const base64Data = file.buffer.toString("base64");
    //   const newData = await this.fileUploadModel.create({
    //     fileName: file.originalname,
    //     contentType: file.mimetype,
    //     base64Data,
    //   });
    //   return newData;
    // } catch (e) {
    //   Logger.error(e);
    //   throw new InternalServerErrorException("Something Wrong");
    // }
  }

  // get image in database
  // async findOne(_id: string, res: Response) {

  //   try {
  //     // ✅ Explicitly define the return type
  //     const image: FileUpload | null = await this.fileUploadModel
  //       .findOne({ _id })
  //       .exec();

  //     if (!image) {
  //       throw new ForbiddenException("Data Not Found");
  //     }

  //     const imgBuffer = Buffer.from(image.base64Data, "base64"); // ✅ TypeScript now recognizes base64Data
  //     // Set Content-Type dynamically
  //     res.setHeader("Content-Type", image.contentType); // ✅ Set correct image type
  //     res.send(Buffer.from(image.base64Data, "base64"));
  //     // return imgBuffer;
  //   } catch (e) {
  //     throw new ForbiddenException("Data Not Found");
  //   }
  // }
}
