"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contact_schema_1 = require("./schema/contact.schema");
let ContactService = class ContactService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    async create(createContactDto) {
        const { name, number, email, message } = createContactDto;
        try {
            await this.contactModel.create({
                name,
                number,
                email,
                message,
            });
        }
        catch (e) {
            common_1.Logger.error(e);
            throw new common_1.InternalServerErrorException("Something Wrong");
        }
        return { message: "Our team will contact you soon" };
    }
    async findAll() {
        const contactDetails = await this.contactModel
            .find({})
            .sort({ createdAt: -1 });
        return { data: contactDetails };
    }
    async seenOne(_id) {
        await this.contactModel.updateOne({ _id }, { seen: true });
        return { message: "seen Successfully" };
    }
    async remove(id) {
        await this.contactModel.findOneAndDelete({ _id: id });
        return { message: "Delete Successfully" };
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.Contact.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactService);
//# sourceMappingURL=contact.service.js.map