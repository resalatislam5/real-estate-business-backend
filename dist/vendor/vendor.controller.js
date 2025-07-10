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
exports.VendorController = void 0;
const common_1 = require("@nestjs/common");
const vendor_service_1 = require("./vendor.service");
const vendor_dto_1 = require("./dto/vendor.dto");
let VendorController = class VendorController {
    constructor(vendorService) {
        this.vendorService = vendorService;
    }
    async fetchAllVendors() {
        return this.vendorService.fetchAllVendors();
    }
    findAllVendors(cid, page, limit, search = '', newDataCount) {
        return this.vendorService.findAllVendors(cid, page, limit, search, newDataCount);
    }
    findOneVendor(uid) {
        return this.vendorService.findOneVendor(uid);
    }
    createVendor(createVendorDto) {
        return this.vendorService.createVendor(createVendorDto);
    }
    updateVendor(updateVendorDto) {
        return this.vendorService.updateVendor(updateVendorDto);
    }
    deleteVendor(uid, page) {
        return this.vendorService.deleteVendor(uid, page);
    }
};
exports.VendorController = VendorController;
__decorate([
    (0, common_1.Get)('fetch-all-vendors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VendorController.prototype, "fetchAllVendors", null);
__decorate([
    (0, common_1.Get)('get-vendors'),
    __param(0, (0, common_1.Query)('cid')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('newDataCount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Number]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "findAllVendors", null);
__decorate([
    (0, common_1.Get)('get-vendor'),
    __param(0, (0, common_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "findOneVendor", null);
__decorate([
    (0, common_1.Post)('create-vendor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vendor_dto_1.CreateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "createVendor", null);
__decorate([
    (0, common_1.Put)('update-vendor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vendor_dto_1.UpdateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "updateVendor", null);
__decorate([
    (0, common_1.Delete)('delete-vendor'),
    __param(0, (0, common_1.Query)('uid')),
    __param(1, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "deleteVendor", null);
exports.VendorController = VendorController = __decorate([
    (0, common_1.Controller)('vendor'),
    __metadata("design:paramtypes", [vendor_service_1.VendorService])
], VendorController);
//# sourceMappingURL=vendor.controller.js.map