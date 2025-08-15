import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Post,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuards } from "src/guards/auth.guards";
import { FileUploadService } from "./file-upload.service";
import { Response } from "express";

@Controller("file-upload")
export class FileUploadController {
  constructor(private readonly FileUploadService: FileUploadService) {}

  @UseGuards(AuthGuards)
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //   new MaxFileSizeValidator({ maxSize: 5000 }),
          new FileTypeValidator({ fileType: "image/*" }),
        ],
      })
    )
    file: Express.Multer.File,
    @Query("folder") folder: string
  ) {
    console.log("hit file-upload");

    return this.FileUploadService.create(file, folder);
  }

  // get image  from database
  @Get(":id")
  findOne(
    @Param("id") id: string,

    @Res() res: Response
  ) {
    return this.FileUploadService.findOne(id, res);
  }

  // delete single Image with id
  @UseGuards(AuthGuards)
  @Delete(":id")
  remove(@Param("id") id: String) {
    return this.FileUploadService.remove(id);
  }
}
