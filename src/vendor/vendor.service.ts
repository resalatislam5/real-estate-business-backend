import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Vendor } from './vendor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVendorDto, UpdateVendorDto } from './dto/vendor.dto';

@Injectable()
export class VendorService {

    constructor(
        @InjectModel(Vendor.name) private vendorModel: Model<Vendor>,
    ) { }

    // used in quotation TODO: need to me handled
    async fetchAllVendors() {
        try {
            return this.vendorModel.find().exec();
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve vendors!',
            );
        }
    }

    async findAllVendors(
        cid: number,
        page: number,
        limit: number,
        search: string,
        newDataCount: number
    ) {
        try {
            const skip = ((page - 1) * limit) + newDataCount;

            const query = this.vendorModel.find({ cid });

            // global search filter
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
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve vendors!',
            );
        }
    }

    async findOneVendor(uid: number) {
        try {
            const vendor = await this.vendorModel.findOne({ uid: uid }).exec();

            if (!vendor) {
                throw new NotFoundException('Vendor not found!');
            }

            return vendor;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve vendor!',
            );
        }
    }

    async createVendor(createVendorDto: CreateVendorDto) {
        try {
            const createdVendor = await new this.vendorModel(createVendorDto).save();

            const totalVendors = await this.vendorModel.countDocuments();

            return {
                createdVendor,
                totalVendors
            };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to create vendor!',
            );
        }
    }

    async updateVendor(updateVendorDto: UpdateVendorDto) {
        try {
            const { uid } = updateVendorDto || {};

            const updatedVendor = await this.vendorModel
                .findOneAndUpdate({ uid: uid }, updateVendorDto, { new: true })
                .exec();

            if (!updatedVendor) {
                throw new NotFoundException('Vendor not found or no update performed!');
            }

            const totalVendors = await this.vendorModel.countDocuments();

            return {
                updatedVendor,
                totalVendors
            };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to update vendor!',
            );
        }
    }

    async deleteVendor(uid: number, page: number) {
        try {
            const deletedVendor = await this.vendorModel.findOneAndDelete({ uid: uid }).exec();

            if (!deletedVendor) {
                throw new NotFoundException('Vendor not found or already deleted!');
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
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to delete vendor!',
            );
        }
    }
}
