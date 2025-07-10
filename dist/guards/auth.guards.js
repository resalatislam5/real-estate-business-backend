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
exports.AuthGuards = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../auth/schema/user.schema");
let AuthGuards = class AuthGuards {
    constructor(JwtService, UserModel) {
        this.JwtService = JwtService;
        this.UserModel = UserModel;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        console.log("Authentication start");
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException("Invalid Token");
        }
        try {
            const payload = this.JwtService.verify(token);
            const user = await this.UserModel.findOne({ _id: payload.user });
            if (!user) {
                throw new common_1.UnauthorizedException("Invalid Token");
            }
            request.user = user;
        }
        catch (e) {
            common_1.Logger.error(e.message);
            throw new common_1.UnauthorizedException("Invalid Token");
        }
        console.log("Authentication start end");
        return true;
    }
    extractTokenFromHeader(req) {
        return req.headers.authorization?.split(" ")[1];
    }
};
exports.AuthGuards = AuthGuards;
exports.AuthGuards = AuthGuards = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], AuthGuards);
//# sourceMappingURL=auth.guards.js.map