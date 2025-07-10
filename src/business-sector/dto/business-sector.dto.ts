import { PartialType } from "@nestjs/mapped-types";
import { Allow, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBusinessSectorDto {
    @IsNotEmpty()
    @IsNumber()
    cid: number;

    @IsString()
    email: string;

    @IsString()
    businessSectorName: string;

    @IsString()
    code: string;

    @IsString()
    status: string;
}

export class UpdateBusinessSectorDto extends PartialType(CreateBusinessSectorDto) {
    @IsNumber()
    @IsNotEmpty({ message: 'Uid is Required!' })
    uid: number;

    @Allow()
    createdAt: Date;

    @Allow()
    updatedAt: Date;

    @Allow()
    _id?: string;

    @Allow()
    __v?: number;
}
