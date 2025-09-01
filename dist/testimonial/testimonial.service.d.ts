import { Model } from "mongoose";
import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { Testimonial } from "./schema/testimonial.schema";
export declare class TestimonialService {
    private testimonialModel;
    constructor(testimonialModel: Model<Testimonial>);
    create(createTestimonialDto: CreateTestimonialDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Testimonial, {}, {}> & Testimonial & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Testimonial, {}, {}> & Testimonial & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Testimonial, {}, {}> & Testimonial & Required<{
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
