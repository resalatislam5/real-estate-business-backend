import { Vendor } from './vendor.schema';
import { Model } from 'mongoose';
import { CreateVendorDto, UpdateVendorDto } from './dto/vendor.dto';
export declare class VendorService {
    private vendorModel;
    constructor(vendorModel: Model<Vendor>);
    fetchAllVendors(): Promise<(import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findAllVendors(cid: number, page: number, limit: number, search: string, newDataCount: number): Promise<{
        vendors: (import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    findOneVendor(uid: number): Promise<import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createVendor(createVendorDto: CreateVendorDto): Promise<{
        createdVendor: import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
    }>;
    updateVendor(updateVendorDto: UpdateVendorDto): Promise<{
        updatedVendor: import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
    }>;
    deleteVendor(uid: number, page: number): Promise<{
        deletedVendor: import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        totalVendors: number;
        newVendor: (import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
}
