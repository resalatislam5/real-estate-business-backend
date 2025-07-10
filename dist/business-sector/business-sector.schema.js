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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessSectorSchema = exports.BusinessSector = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BusinessSector = class BusinessSector extends mongoose_2.Document {
};
exports.BusinessSector = BusinessSector;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: () => +`${Date.now()}${Math.floor(100 + Math.random() * 900)}`,
        unique: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], BusinessSector.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], BusinessSector.prototype, "cid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BusinessSector.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BusinessSector.prototype, "businessSectorName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BusinessSector.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: ['active', 'inactive', 'closed'],
    }),
    __metadata("design:type", String)
], BusinessSector.prototype, "status", void 0);
exports.BusinessSector = BusinessSector = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], BusinessSector);
exports.BusinessSectorSchema = mongoose_1.SchemaFactory.createForClass(BusinessSector);
//# sourceMappingURL=business-sector.schema.js.map