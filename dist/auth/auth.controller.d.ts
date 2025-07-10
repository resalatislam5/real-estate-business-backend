import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { LoginDto } from "./dto/login.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    validateRefreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        jwtToken: string;
        refreshToken: string;
    }>;
    allUser(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    oneUser(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | null;
    }>;
}
