"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const testimonial_schema_1 = require("./schema/testimonial.schema");
let TestimonialService = class TestimonialService {
    constructor(testimonialModel) {
        this.testimonialModel = testimonialModel;
    }
    async create(createTestimonialDto) {
        const data = await this.testimonialModel.create(createTestimonialDto);
        return { message: "Testimonial add successfully", data: data };
    }
    async findAll() {
        const data = await this.testimonialModel.find({});
        return data;
    }
    async findOne(id) {
        try {
            const data = await this.testimonialModel.findById(id);
            if (!data) {
                throw new common_1.NotFoundException("Testimonial Not Found");
            }
            return data;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async update(id, updateTestimonialDto) {
        const result = await this.testimonialModel.findById(id);
        if (!result) {
            throw new common_1.NotFoundException("Testimonial Not Found");
        }
        await this.testimonialModel.findByIdAndUpdate(id, updateTestimonialDto);
        return { message: "Update successfully" };
    }
    async remove(id) {
        try {
            let result = await this.testimonialModel.findById(id);
            if (!result) {
                throw new common_1.NotFoundException("Testimonial Not Found");
            }
            await this.testimonialModel.findByIdAndDelete(id);
            return {
                message: "Delete Successfully",
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
};
exports.TestimonialService = TestimonialService;
exports.TestimonialService = TestimonialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(testimonial_schema_1.Testimonial.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestimonialService);
//# sourceMappingURL=testimonial.service.js.map