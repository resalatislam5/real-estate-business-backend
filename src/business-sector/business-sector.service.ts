import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BusinessSector } from './business-sector.schema';
import { Model } from 'mongoose';
import { CreateBusinessSectorDto, UpdateBusinessSectorDto } from './dto/business-sector.dto';

@Injectable()
export class BusinessSectorService {
    constructor(
        @InjectModel(BusinessSector.name)
        private businessSectorModel: Model<BusinessSector>,
    ) { }

    async findAllBusinessSectors(cid: number, search: string) {
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
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve business sectors!',
            );
        }
    }

    async findOneBusinessSector(uid: number) {
        try {
            const businessSector = await this.businessSectorModel.findOne({ uid: uid }).exec();

            if (!businessSector) {
                throw new NotFoundException('Business sector not found!');
            }

            return businessSector;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve business sector!',
            );
        }
    }

    async findBusinessSectorByEmail(email: string) {
        try {
            const businessSectors = await this.businessSectorModel.find({ email: email, status: 'active' }).exec();

            if (!businessSectors || businessSectors.length === 0) {
                throw new NotFoundException('No active business sectors found for this email!');
            }

            return businessSectors;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to retrieve business sectors by email!',
            );
        }
    }

    async createBusinessSector(createBusinessSectorDto: CreateBusinessSectorDto) {
        try {
            const createdBusinessSector = await new this.businessSectorModel(createBusinessSectorDto).save();

            return createdBusinessSector;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to create business sector!',
            );
        }
    }

    async updateBusinessSector(updateBusinessSectorDto: UpdateBusinessSectorDto) {
        try {
            const { uid } = updateBusinessSectorDto || {};

            const updatedBusinessSector = await this.businessSectorModel
                .findOneAndUpdate({ uid: uid }, updateBusinessSectorDto, { new: true })
                .exec();

            if (!updatedBusinessSector) {
                throw new NotFoundException('Business sector not found or no update performed!');
            }

            return updatedBusinessSector;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to update business sector!',
            );
        }
    }

    async deleteBusinessSector(uid: number) {
        try {
            const deletedBusinessSector = await this.businessSectorModel
                .findOneAndDelete({ uid: uid })
                .exec();

            if (!deletedBusinessSector) {
                throw new NotFoundException('Business sector not found or already deleted!');
            }

            return deletedBusinessSector;
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Unable to delete business sector!',
            );
        }
    }
}
