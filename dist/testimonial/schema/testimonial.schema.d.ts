import { Document } from "mongoose";
export declare class Testimonial extends Document {
    image: String;
    name: String;
    profession: String;
    description: String;
}
export declare const TestimonialSchema: import("mongoose").Schema<Testimonial, import("mongoose").Model<Testimonial, any, any, any, Document<unknown, any, Testimonial, any, {}> & Testimonial & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Testimonial, Document<unknown, {}, import("mongoose").FlatRecord<Testimonial>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Testimonial> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
