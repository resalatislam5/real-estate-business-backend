import { Model } from "mongoose";
import { CreateContactDto } from "./dto/create-contact.dto";
import { Contact } from "./schema/contact.schema";
export declare class ContactService {
    private readonly contactModel;
    constructor(contactModel: Model<Contact>);
    create(createContactDto: CreateContactDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        data: (import("mongoose").Document<unknown, {}, Contact, {}, {}> & Contact & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    seenOne(_id: string): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
