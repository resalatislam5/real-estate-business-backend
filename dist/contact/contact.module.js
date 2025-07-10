"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const contact_controller_1 = require("./contact.controller");
const contact_service_1 = require("./contact.service");
const live_chat_gateway_1 = require("./live-chat/live-chat.gateway");
const contact_schema_1 = require("./schema/contact.schema");
let ContactModule = class ContactModule {
};
exports.ContactModule = ContactModule;
exports.ContactModule = ContactModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: contact_schema_1.Contact.name, schema: contact_schema_1.ContactSchema }]),
            auth_module_1.AuthModule,
        ],
        controllers: [contact_controller_1.ContactController],
        providers: [contact_service_1.ContactService, live_chat_gateway_1.LiveChatGateway],
    })
], ContactModule);
//# sourceMappingURL=contact.module.js.map