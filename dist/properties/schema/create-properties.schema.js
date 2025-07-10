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
exports.createPropertiesSchema = exports.createProperties = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../auth/schema/user.schema");
let createProperties = class createProperties extends mongoose_2.Document {
};
exports.createProperties = createProperties;
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "sq_ft", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "property_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "baths", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "beds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "year_built", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "garage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "garage_size", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "property_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "division", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", Number)
], createProperties.prototype, "zip_code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true, trim: true }),
    __metadata("design:type", String)
], createProperties.prototype, "video", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], createProperties.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: true }),
    __metadata("design:type", user_schema_1.User)
], createProperties.prototype, "creator", void 0);
exports.createProperties = createProperties = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], createProperties);
exports.createPropertiesSchema = mongoose_1.SchemaFactory.createForClass(createProperties);
//# sourceMappingURL=create-properties.schema.js.map