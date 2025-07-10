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
exports.VendorService = void 0;
const common_1 = require("@nestjs/common");
const vendor_schema_1 = require("./vendor.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let VendorService = class VendorService {
    constructor(vendorModel) {
        this.vendorModel = vendorModel;
    }
    async fetchAllVendors() {
        try {
            return this.vendorModel.find().exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve vendors!');
        }
    }
    async findAllVendors(cid, page, limit, search, newDataCount) {
        try {
            const skip = ((page - 1) * limit) + newDataCount;
            const query = this.vendorModel.find({ cid });
            if (search) {
                const searchRegex = new RegExp(search, 'i');
                query.or([
                    { vendorName: searchRegex },
                    { contactPersonName: searchRegex },
                    { email: searchRegex },
                    { telephoneNumber: searchRegex },
                ]);
            }
            const vendors = await query.skip(skip).limit(limit).sort({ createdAt: -1 }).exec();
            const totalVendors = await this.vendorModel.countDocuments(query);
            const totalPages = Math.ceil(totalVendors / limit);
            return {
                vendors,
                totalPages
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve vendors!');
        }
    }
    async findOneVendor(uid) {
        try {
            const vendor = await this.vendorModel.findOne({ uid: uid }).exec();
            if (!vendor) {
                throw new common_1.NotFoundException('Vendor not found!');
            }
            return vendor;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to retrieve vendor!');
        }
    }
    async createVendor(createVendorDto) {
        try {
            const createdVendor = await new this.vendorModel(createVendorDto).save();
            const totalVendors = await this.vendorModel.countDocuments();
            return {
                createdVendor,
                totalVendors
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to create vendor!');
        }
    }
    async updateVendor(updateVendorDto) {
        try {
            const { uid } = updateVendorDto || {};
            const updatedVendor = await this.vendorModel
                .findOneAndUpdate({ uid: uid }, updateVendorDto, { new: true })
                .exec();
            if (!updatedVendor) {
                throw new common_1.NotFoundException('Vendor not found or no update performed!');
            }
            const totalVendors = await this.vendorModel.countDocuments();
            return {
                updatedVendor,
                totalVendors
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to update vendor!');
        }
    }
    async deleteVendor(uid, page) {
        try {
            const deletedVendor = await this.vendorModel.findOneAndDelete({ uid: uid }).exec();
            if (!deletedVendor) {
                throw new common_1.NotFoundException('Vendor not found or already deleted!');
            }
            const skip = (page * 10) - 1;
            const newVendor = await this.vendorModel.find()
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(1)
                .exec();
            const totalVendors = await this.vendorModel.countDocuments();
            return {
                deletedVendor,
                totalVendors,
                newVendor,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message || 'Unable to delete vendor!');
        }
    }
};
exports.VendorService = VendorService;
exports.VendorService = VendorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(vendor_schema_1.Vendor.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], VendorService);
//# sourceMappingURL=vendor.service.js.map