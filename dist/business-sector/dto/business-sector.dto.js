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
exports.UpdateBusinessSectorDto = exports.CreateBusinessSectorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateBusinessSectorDto {
}
exports.CreateBusinessSectorDto = CreateBusinessSectorDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBusinessSectorDto.prototype, "cid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBusinessSectorDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBusinessSectorDto.prototype, "businessSectorName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBusinessSectorDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBusinessSectorDto.prototype, "status", void 0);
class UpdateBusinessSectorDto extends (0, mapped_types_1.PartialType)(CreateBusinessSectorDto) {
}
exports.UpdateBusinessSectorDto = UpdateBusinessSectorDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Uid is Required!' }),
    __metadata("design:type", Number)
], UpdateBusinessSectorDto.prototype, "uid", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Date)
], UpdateBusinessSectorDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Date)
], UpdateBusinessSectorDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], UpdateBusinessSectorDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Number)
], UpdateBusinessSectorDto.prototype, "__v", void 0);
//# sourceMappingURL=business-sector.dto.js.map