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
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_upload_schema_1 = require("./schema/file-upload.schema");
let FileUploadService = class FileUploadService {
    constructor(fileUploadModel) {
        this.fileUploadModel = fileUploadModel;
    }
    async create(file, folder) {
        console.log("file", file);
        console.log("folder", folder);
        if (!file) {
            throw new common_1.ForbiddenException("Please  upload a valid file");
        }
        try {
            const base64Data = file.buffer.toString("base64");
            const newData = await this.fileUploadModel.create({
                folderName: folder,
                fileName: file.originalname,
                contentType: file.mimetype,
                base64Data,
            });
            return { path: `file-upload/${newData._id}` };
        }
        catch (e) {
            common_1.Logger.error(e);
            throw new common_1.InternalServerErrorException("Something Wrong");
        }
    }
    async findOne(_id, res) {
        try {
            const image = await this.fileUploadModel
                .findOne({ _id })
                .exec();
            if (!image) {
                throw new common_1.ForbiddenException("Data Not Found");
            }
            const imgBuffer = Buffer.from(image.base64Data, "base64");
            res.setHeader("Content-Type", image.contentType);
            res.send(Buffer.from(image.base64Data, "base64"));
        }
        catch (e) {
            throw new common_1.ForbiddenException("Data Not Found");
        }
    }
    async remove(id) {
        try {
            await this.fileUploadModel.findByIdAndDelete(id);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(file_upload_schema_1.FileUpload.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map