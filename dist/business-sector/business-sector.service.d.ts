import { BusinessSector } from './business-sector.schema';
import { Model } from 'mongoose';
import { CreateBusinessSectorDto, UpdateBusinessSectorDto } from './dto/business-sector.dto';
export declare class BusinessSectorService {
    private businessSectorModel;
    constructor(businessSectorModel: Model<BusinessSector>);
    findAllBusinessSectors(cid: number, search: string): Promise<(import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOneBusinessSector(uid: number): Promise<import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findBusinessSectorByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createBusinessSector(createBusinessSectorDto: CreateBusinessSectorDto): Promise<import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateBusinessSector(updateBusinessSectorDto: UpdateBusinessSectorDto): Promise<import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteBusinessSector(uid: number): Promise<import("mongoose").Document<unknown, {}, BusinessSector> & BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
