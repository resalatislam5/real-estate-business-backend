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
exports.FileUploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guards_1 = require("../guards/auth.guards");
const file_upload_service_1 = require("./file-upload.service");
let FileUploadController = class FileUploadController {
    constructor(FileUploadService) {
        this.FileUploadService = FileUploadService;
    }
    create(file, folder) {
        console.log("hit file-upload");
        return this.FileUploadService.create(file, folder);
    }
    findOne(id, res) {
        return this.FileUploadService.findOne(id, res);
    }
    remove(id) {
        return this.FileUploadService.remove(id);
    }
};
exports.FileUploadController = FileUploadController;
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthGuards),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: "image/*" }),
        ],
    }))),
    __param(1, (0, common_1.Query)("folder")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FileUploadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FileUploadController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthGuards),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileUploadController.prototype, "remove", null);
exports.FileUploadController = FileUploadController = __decorate([
    (0, common_1.Controller)("file-upload"),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileUploadController);
//# sourceMappingURL=file-upload.controller.js.map