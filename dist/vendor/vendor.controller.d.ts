import { VendorService } from './vendor.service';
import { CreateVendorDto, UpdateVendorDto } from './dto/vendor.dto';
export declare class VendorController {
    private readonly vendorService;
    constructor(vendorService: VendorService);
    fetchAllVendors(): Promise<(import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findAllVendors(cid: number, page: number, limit: number, search: string | undefined, newDataCount: number): Promise<{
        vendors: (import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    findOneVendor(uid: number): Promise<import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createVendor(createVendorDto: CreateVendorDto): Promise<{
        createdVendor: import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
    }>;
    updateVendor(updateVendorDto: UpdateVendorDto): Promise<{
        updatedVendor: import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
    }>;
    deleteVendor(uid: number, page: number): Promise<{
        deletedVendor: import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
        newVendor: (import("mongoose").Document<unknown, {}, import("./vendor.schema").Vendor, {}, {}> & import("./vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
}
