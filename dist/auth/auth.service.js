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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcryptjs");
const mongoose_2 = require("mongoose");
const DeleteImage_1 = require("../utils/DeleteImage");
const uuid_1 = require("uuid");
const refresh_token_schema_1 = require("./schema/refresh-token.schema");
const user_schema_1 = require("./schema/user.schema");
let AuthService = class AuthService {
    constructor(UserModel, RefreshTokenModel, jwtService) {
        this.UserModel = UserModel;
        this.RefreshTokenModel = RefreshTokenModel;
        this.jwtService = jwtService;
    }
    async create(createAuthDto) {
        try {
            const { name, email, password } = createAuthDto;
            const emailInUse = await this.UserModel.findOne({
                email,
            });
            if (emailInUse) {
                throw new common_1.BadRequestException("User Already Registered");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.UserModel.create({
                name,
                email,
                password: hashedPassword,
            });
            const token = await this.generateUserToken(user._id);
            return {
                message: "Signup success",
                data: {
                    ...token,
                    name: user.name,
                    role: user.role,
                    _id: user._id,
                    image: user.image,
                },
            };
        }
        catch (e) {
            console.log(e);
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
    async loginUser(loginDto) {
        const { email, password } = loginDto;
        const user = await this.UserModel.findOne({ email });
        if (!user)
            throw new common_1.UnauthorizedException("Wrong credentials");
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch)
            throw new common_1.UnauthorizedException("Wrong credentials");
        const token = await this.generateUserToken(user._id);
        return {
            message: "login success",
            data: {
                ...token,
                name: user.name,
                role: user.role,
                _id: user._id,
                image: user.image,
            },
        };
    }
    async generateUserToken(userId) {
        const jwtToken = this.jwtService.sign({ user: userId }, { expiresIn: "2days" });
        const refreshToken = (0, uuid_1.v4)();
        await this.storeRefreshToken(refreshToken, userId);
        return {
            jwtToken,
            refreshToken,
        };
    }
    async storeRefreshToken(token, userId) {
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 4);
        await this.RefreshTokenModel.create({ token, userId, expireDate });
    }
    async validateRefreshToken(refreshToken) {
        const token = await this.RefreshTokenModel.findOneAndDelete({
            token: refreshToken.RefreshToken,
            expireDate: { $gte: new Date() },
        });
        if (!token) {
            throw new common_1.UnauthorizedException("user not valid");
        }
        return this.generateUserToken(token.userId);
    }
    async allUser() {
        const data = await this.UserModel.find({});
        return data;
    }
    async oneUser(id) {
        try {
            const data = await this.UserModel.findById(id);
            return data;
        }
        catch (e) {
            console.log(e);
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
    async remove(id) {
        try {
            const data = await this.UserModel.findById(id);
            if (!data) {
                throw new common_1.NotFoundException("User not found");
            }
            await (0, DeleteImage_1.DeleteImage)(data.image);
            const deletedUser = await this.UserModel.findOneAndDelete({ _id: id });
            return { message: "user remove successfully", data: deletedUser };
        }
        catch (e) {
            console.log(e);
            throw new common_1.InternalServerErrorException("Something was wrong");
        }
    }
    async update(id, updateAuthDto) {
        const { name, number, address, image, newImage } = updateAuthDto;
        console.log("update user", name, number, address);
        const updateDto = { name, number, address, image: newImage ?? image };
        const data = await this.UserModel.findByIdAndUpdate(id, updateDto, { new: true, runValidators: true });
        if (!data) {
            throw new common_1.NotFoundException("Property not found");
        }
        return { message: "Updated successfully", data };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(refresh_token_schema_1.RefreshToken.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map