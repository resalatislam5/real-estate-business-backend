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
exports.BusinessSectorController = void 0;
const common_1 = require("@nestjs/common");
const business_sector_service_1 = require("./business-sector.service");
const business_sector_dto_1 = require("./dto/business-sector.dto");
let BusinessSectorController = class BusinessSectorController {
    constructor(businessSectorService) {
        this.businessSectorService = businessSectorService;
    }
    findAllBusinessSectors(cid, search = '') {
        return this.businessSectorService.findAllBusinessSectors(cid, search);
    }
    findOneBusinessSector(uid) {
        return this.businessSectorService.findOneBusinessSector(uid);
    }
    findByEmail(email) {
        return this.businessSectorService.findBusinessSectorByEmail(email);
    }
    createBusinessSector(createBusinessSectorDto) {
        return this.businessSectorService.createBusinessSector(createBusinessSectorDto);
    }
    updateBusinessSector(updateBusinessSectorDto) {
        return this.businessSectorService.updateBusinessSector(updateBusinessSectorDto);
    }
    deleteBusinessSector(uid) {
        return this.businessSectorService.deleteBusinessSector(uid);
    }
};
exports.BusinessSectorController = BusinessSectorController;
__decorate([
    (0, common_1.Get)('get-business-sectors'),
    __param(0, (0, common_1.Query)('cid')),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "findAllBusinessSectors", null);
__decorate([
    (0, common_1.Get)('get-business-sector'),
    __param(0, (0, common_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "findOneBusinessSector", null);
__decorate([
    (0, common_1.Get)('get-business-sector-by-email'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Post)('create-business-sector'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [business_sector_dto_1.CreateBusinessSectorDto]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "createBusinessSector", null);
__decorate([
    (0, common_1.Put)('update-business-sector'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [business_sector_dto_1.UpdateBusinessSectorDto]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "updateBusinessSector", null);
__decorate([
    (0, common_1.Delete)('delete-business-sector'),
    __param(0, (0, common_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BusinessSectorController.prototype, "deleteBusinessSector", null);
exports.BusinessSectorController = BusinessSectorController = __decorate([
    (0, common_1.Controller)('business-sector'),
    __metadata("design:paramtypes", [business_sector_service_1.BusinessSectorService])
], BusinessSectorController);
//# sourceMappingURL=business-sector.controller.js.map