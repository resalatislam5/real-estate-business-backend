import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";
import { Model } from "mongoose";
import { User } from "src/auth/schema/user.schema";

@Injectable()
export class AdminAuthGuards implements CanActivate {
  constructor(
    private JwtService: JwtService,
    @InjectModel(User.name) private readonly UserModel: Model<User>
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("Authentication start---admin");

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      console.log("Authentication start---token");
      throw new UnauthorizedException("Invalid Token");
    }
    try {
      const payload = this.JwtService.verify(token);
      const user = await this.UserModel.findOne({ _id: payload.user });
      if (!user) {
        throw new UnauthorizedException("Invalid Token");
      }
      if (!(user.role === "admin")) {
        throw new UnauthorizedException("User does't have permission");
      }
      request.user = user;
    } catch (e) {
      Logger.error(e.message);
      throw new UnauthorizedException("Invalid Token");
    }
    return true;
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    return req.headers.authorization?.split(" ")[1];
  }
}
