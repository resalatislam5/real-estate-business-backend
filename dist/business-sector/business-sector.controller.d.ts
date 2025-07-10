import { BusinessSectorService } from './business-sector.service';
import { CreateBusinessSectorDto, UpdateBusinessSectorDto } from './dto/business-sector.dto';
export declare class BusinessSectorController {
    private readonly businessSectorService;
    constructor(businessSectorService: BusinessSectorService);
    findAllBusinessSectors(cid: number, search?: string): Promise<(import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOneBusinessSector(uid: number): Promise<import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createBusinessSector(createBusinessSectorDto: CreateBusinessSectorDto): Promise<import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateBusinessSector(updateBusinessSectorDto: UpdateBusinessSectorDto): Promise<import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteBusinessSector(uid: number): Promise<import("mongoose").Document<unknown, {}, import("./business-sector.schema").BusinessSector> & import("./business-sector.schema").BusinessSector & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
