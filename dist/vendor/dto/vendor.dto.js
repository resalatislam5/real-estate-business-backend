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
exports.UpdateVendorDto = exports.CreateVendorDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const mapped_types_1 = require("@nestjs/mapped-types");
class AdditionalFieldDto {
}
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], AdditionalFieldDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdditionalFieldDto.prototype, "fieldName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdditionalFieldDto.prototype, "fieldValue", void 0);
class ProductDto {
}
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], ProductDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDto.prototype, "productName", void 0);
class CreateVendorDto {
}
exports.CreateVendorDto = CreateVendorDto;
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Number)
], CreateVendorDto.prototype, "__v", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Number)
], CreateVendorDto.prototype, "uid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "vendorName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "contactPersonName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "designation", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVendorDto.prototype, "cid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "telephoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "streetAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "stateProvince", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "zipPostalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "businessType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "servicesOffered", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "establishedDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "yearsInBusiness", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "reputation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "businessLicenseNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "taxIdVatNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "bankName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "bankAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "paymentTerms", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "preferredPaymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "creditLimit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "clientReferences", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "previousProjectExamples", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "relevantCertifications", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "complianceDocuments", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "healthSafetyPolicies", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "specialRequirements", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorDto.prototype, "additionalNotesComments", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AdditionalFieldDto),
    __metadata("design:type", Array)
], CreateVendorDto.prototype, "additionalFields", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProductDto),
    __metadata("design:type", Array)
], CreateVendorDto.prototype, "products", void 0);
class UpdateVendorDto extends (0, mapped_types_1.PartialType)(CreateVendorDto) {
}
exports.UpdateVendorDto = UpdateVendorDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Uid is Required!' }),
    __metadata("design:type", Number)
], UpdateVendorDto.prototype, "uid", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Date)
], UpdateVendorDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Date)
], UpdateVendorDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], UpdateVendorDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Number)
], UpdateVendorDto.prototype, "__v", void 0);
//# sourceMappingURL=vendor.dto.js.map