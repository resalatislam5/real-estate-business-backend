"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessSectorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const business_sector_schema_1 = require("./business-sector.schema");
const business_sector_controller_1 = require("./business-sector.controller");
const business_sector_service_1 = require("./business-sector.service");
let BusinessSectorModule = class BusinessSectorModule {
};
exports.BusinessSectorModule = BusinessSectorModule;
exports.BusinessSectorModule = BusinessSectorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: business_sector_schema_1.BusinessSector.name,
                    schema: business_sector_schema_1.BusinessSectorSchema
                }]),
        ],
        controllers: [business_sector_controller_1.BusinessSectorController],
        providers: [business_sector_service_1.BusinessSectorService],
        exports: [business_sector_service_1.BusinessSectorService],
    })
], BusinessSectorModule);
//# sourceMappingURL=business-sector.module.js.map