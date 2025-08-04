import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuards } from "src/guards/auth.guards";
import { FileUploadService } from "./file-upload.service";

@UseGuards(AuthGuards)
@Controller("file-upload")
export class FileUploadController {
  constructor(private readonly FileUploadService: FileUploadService) {}

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
    file: Express.Multer.File
  ) {
    console.log("hit file-upload");

    return this.FileUploadService.create(file);
  }

  // get image  from database
  // @Get(":id")
  // findOne(@Param("id") id: string, @Res() res: Response) {
  //   return this.FileUploadService.findOne(id, res);
  // }
}
