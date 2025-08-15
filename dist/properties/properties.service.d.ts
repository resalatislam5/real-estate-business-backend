import { CreatePropertyDto } from "./dto/create-property.dto";
import { createProperties } from "./schema/create-properties.schema";
import { Model } from "mongoose";
export declare class PropertiesService {
    private readonly propertiesModel;
    constructor(propertiesModel: Model<createProperties>);
    create(createPropertyDto: CreatePropertyDto, user: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, createProperties, {}, {}> & createProperties & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, createProperties, {}, {}> & createProperties & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, createProperties, {}, {}> & createProperties & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updatePropertyDto: CreatePropertyDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, createProperties, {}, {}> & createProperties & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
