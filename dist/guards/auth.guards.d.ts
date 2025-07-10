import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { User } from "src/auth/schema/user.schema";
export declare class AuthGuards implements CanActivate {
    private JwtService;
    private readonly UserModel;
    constructor(JwtService: JwtService, UserModel: Model<User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
