import { PropertiesService } from "./properties.service";
import { CreatePropertyDto } from "./dto/create-property.dto";
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    create(createPropertyDto: CreatePropertyDto, req: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/create-properties.schema").createProperties> & import("./schema/create-properties.schema").createProperties & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/create-properties.schema").createProperties> & import("./schema/create-properties.schema").createProperties & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/create-properties.schema").createProperties> & import("./schema/create-properties.schema").createProperties & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updatePropertyDto: CreatePropertyDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/create-properties.schema").createProperties> & import("./schema/create-properties.schema").createProperties & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
