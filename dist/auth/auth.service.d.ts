import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { LoginDto } from "./dto/login.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { RefreshToken } from "./schema/refresh-token.schema";
import { User } from "./schema/user.schema";
export declare class AuthService {
    private UserModel;
    private RefreshTokenModel;
    private readonly jwtService;
    constructor(UserModel: Model<User>, RefreshTokenModel: Model<RefreshToken>, jwtService: JwtService);
    create(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        data: {
            name: string;
            role: string;
            _id: unknown;
            image: string;
            jwtToken: string;
            refreshToken: string;
        };
    }>;
    loginUser(loginDto: LoginDto): Promise<{
        message: string;
        data: {
            name: string;
            role: string;
            _id: unknown;
            image: string;
            jwtToken: string;
            refreshToken: string;
        };
    }>;
    generateUserToken(userId: any): Promise<{
        jwtToken: string;
        refreshToken: string;
    }>;
    storeRefreshToken(token: string, userId: any): Promise<void>;
    validateRefreshToken(refreshToken: RefreshTokenDto): Promise<{
        jwtToken: string;
        refreshToken: string;
    }>;
    allUser(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    oneUser(id: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | null;
    }>;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
}
