import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FileUploadService } from "src/file-upload/file-upload.service";
import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { Testimonial } from "./schema/testimonial.schema";

@Injectable()
export class TestimonialService {
  constructor(
    @InjectModel(Testimonial.name) private testimonialModel: Model<Testimonial>,
    private fileUploadService: FileUploadService
  ) {}
  async create(createTestimonialDto: CreateTestimonialDto) {
    const data = await this.testimonialModel.create(createTestimonialDto);
    return { message: "Testimonial add successfully", data: data };
  }

  async findAll() {
    const data = await this.testimonialModel.find({});
    return data;
  }

  async findOne(id: string) {
    try {
      const data = await this.testimonialModel.findById(id);
      if (!data) {
        throw new NotFoundException("Testimonial Not Found");
      }
      return data;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async update(id: string, updateTestimonialDto: CreateTestimonialDto) {
    const result = await this.testimonialModel.findById(id);

    if (!result) {
      throw new NotFoundException("Testimonial Not Found");
    }

    await this.testimonialModel.findByIdAndUpdate(id, updateTestimonialDto);
    return { message: "Update successfully" };
  }

  async remove(id: string) {
    try {
      let result = await this.testimonialModel.findById(id);
      if (!result) {
        throw new NotFoundException("Testimonial Not Found");
      }

      await this.testimonialModel.findByIdAndDelete(id);
      return {
        message: "Delete Successfully",
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
