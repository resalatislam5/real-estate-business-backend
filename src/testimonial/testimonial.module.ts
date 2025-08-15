import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { FileUploadModule } from "src/file-upload/file-upload.module";
import { Testimonial, TestimonialSchema } from "./schema/testimonial.schema";
import { TestimonialController } from "./testimonial.controller";
import { TestimonialService } from "./testimonial.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Testimonial.name, schema: TestimonialSchema },
    ]),
    AuthModule,
    FileUploadModule,
  ],
  controllers: [TestimonialController],
  providers: [TestimonialService],
})
export class TestimonialModule {}
