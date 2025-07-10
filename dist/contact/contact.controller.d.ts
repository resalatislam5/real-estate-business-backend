import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(createContactDto: CreateContactDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/contact.schema").Contact> & import("./schema/contact.schema").Contact & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    seenOne(id: string): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
