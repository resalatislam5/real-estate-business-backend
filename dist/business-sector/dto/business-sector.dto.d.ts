export declare class CreateBusinessSectorDto {
    cid: number;
    email: string;
    businessSectorName: string;
    code: string;
    status: string;
}
declare const UpdateBusinessSectorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBusinessSectorDto>>;
export declare class UpdateBusinessSectorDto extends UpdateBusinessSectorDto_base {
    uid: number;
    createdAt: Date;
    updatedAt: Date;
    _id?: string;
    __v?: number;
}
export {};
