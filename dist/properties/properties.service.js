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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const create_properties_schema_1 = require("./schema/create-properties.schema");
const mongoose_2 = require("mongoose");
let PropertiesService = class PropertiesService {
    constructor(propertiesModel) {
        this.propertiesModel = propertiesModel;
    }
    async create(createPropertyDto, user) {
        try {
            const newItems = await this.propertiesModel.create({
                ...createPropertyDto,
                creator: user._id,
            });
            return { message: "property added successfully", data: newItems };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
    async findAll() {
        const data = await this.propertiesModel.find({});
        return data;
    }
    async findOne(id) {
        try {
            const data = await this.propertiesModel.findOne({ _id: id });
            return data;
        }
        catch (e) {
            console.error(e.message);
            throw new common_1.NotFoundException("Data Not Found");
        }
    }
    async update(id, updatePropertyDto) {
        try {
            const { newImage, image } = updatePropertyDto;
            const updated = await this.propertiesModel.findByIdAndUpdate(id, { ...updatePropertyDto, image: newImage ?? image }, {
                new: true,
                runValidators: true,
            });
            if (!updated) {
                throw new common_1.NotFoundException("Property not found");
            }
            return { message: `updated successfully`, data: updated };
        }
        catch (e) {
            console.log(e);
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
    async remove(id) {
        try {
            const data = await this.propertiesModel.findById(id);
            if (!data) {
                throw new common_1.NotFoundException("Property not found");
            }
            await this.propertiesModel.deleteOne({ _id: id });
            return { message: `removes a #${id} property` };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(create_properties_schema_1.createProperties.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PropertiesService);
//# sourceMappingURL=properties.service.js.map