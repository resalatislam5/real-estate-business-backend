import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { TestimonialService } from "./testimonial.service";
export declare class TestimonialController {
    private readonly testimonialService;
    constructor(testimonialService: TestimonialService);
    create(createTestimonialDto: CreateTestimonialDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/testimonial.schema").Testimonial, {}, {}> & import("./schema/testimonial.schema").Testimonial & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/testimonial.schema").Testimonial, {}, {}> & import("./schema/testimonial.schema").Testimonial & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/testimonial.schema").Testimonial, {}, {}> & import("./schema/testimonial.schema").Testimonial & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateTestimonialDto: CreateTestimonialDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
