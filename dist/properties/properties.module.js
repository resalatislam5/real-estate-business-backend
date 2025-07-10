"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesModule = void 0;
const common_1 = require("@nestjs/common");
const properties_service_1 = require("./properties.service");
const properties_controller_1 = require("./properties.controller");
const mongoose_1 = require("@nestjs/mongoose");
const create_properties_schema_1 = require("./schema/create-properties.schema");
const auth_module_1 = require("../auth/auth.module");
let PropertiesModule = class PropertiesModule {
};
exports.PropertiesModule = PropertiesModule;
exports.PropertiesModule = PropertiesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                { name: create_properties_schema_1.createProperties.name, schema: create_properties_schema_1.createPropertiesSchema },
            ]),
        ],
        controllers: [properties_controller_1.PropertiesController],
        providers: [properties_service_1.PropertiesService],
    })
], PropertiesModule);
//# sourceMappingURL=properties.module.js.map