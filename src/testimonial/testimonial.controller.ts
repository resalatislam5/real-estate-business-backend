import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AdminAuthGuards } from "src/guards/admin.auth.guards";
import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { TestimonialService } from "./testimonial.service";

@Controller("testimonial")
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @UseGuards(AdminAuthGuards)
  @Post()
  create(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.testimonialService.create(createTestimonialDto);
  }

  @Get()
  findAll() {
    return this.testimonialService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.testimonialService.findOne(id);
  }

  @UseGuards(AdminAuthGuards)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTestimonialDto: CreateTestimonialDto
  ) {
    return this.testimonialService.update(id, updateTestimonialDto);
  }

  @UseGuards(AdminAuthGuards)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.testimonialService.remove(id);
  }
}
