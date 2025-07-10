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
exports.BusinessSectorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const business_sector_schema_1 = require("./business-sector.schema");
const mongoose_2 = require("mongoose");
let BusinessSectorService = class BusinessSectorService {
    constructor(businessSectorModel) {
        this.businessSectorModel = businessSectorModel;
    }
    async findAllBusinessSectors(cid, search) {
        try {
            const query = this.businessSectorModel.find({ cid });
            if (search) {
                const searchRegex = new RegExp(search, 'i');
                query.or([
                    { businessSectorName: searchRegex },
                    { email: searchRegex },
                    { code: searchRegex },
                ]);
            }
            const businessSectors = await query.sort({ createdAt: -1 }).exec();
            return businessSectors;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve business sectors!');
        }
    }
    async findOneBusinessSector(uid) {
        try {
            const businessSector = await this.businessSectorModel.findOne({ uid: uid }).exec();
            if (!businessSector) {
                throw new common_1.NotFoundException('Business sector not found!');
            }
            return businessSector;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve business sector!');
        }
    }
    async findBusinessSectorByEmail(email) {
        try {
            const businessSectors = await this.businessSectorModel.find({ email: email, status: 'active' }).exec();
            if (!businessSectors || businessSectors.length === 0) {
                throw new common_1.NotFoundException('No active business sectors found for this email!');
            }
            return businessSectors;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve business sectors by email!');
        }
    }
    async createBusinessSector(createBusinessSectorDto) {
        try {
            const createdBusinessSector = await new this.businessSectorModel(createBusinessSectorDto).save();
            return createdBusinessSector;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to create business sector!');
        }
    }
    async updateBusinessSector(updateBusinessSectorDto) {
        try {
            const { uid } = updateBusinessSectorDto || {};
            const updatedBusinessSector = await this.businessSectorModel
                .findOneAndUpdate({ uid: uid }, updateBusinessSectorDto, { new: true })
                .exec();
            if (!updatedBusinessSector) {
                throw new common_1.NotFoundException('Business sector not found or no update performed!');
            }
            return updatedBusinessSector;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to update business sector!');
        }
    }
    async deleteBusinessSector(uid) {
        try {
            const deletedBusinessSector = await this.businessSectorModel
                .findOneAndDelete({ uid: uid })
                .exec();
            if (!deletedBusinessSector) {
                throw new common_1.NotFoundException('Business sector not found or already deleted!');
            }
            return deletedBusinessSector;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to delete business sector!');
        }
    }
};
exports.BusinessSectorService = BusinessSectorService;
exports.BusinessSectorService = BusinessSectorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(business_sector_schema_1.BusinessSector.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BusinessSectorService);
//# sourceMappingURL=business-sector.service.js.map