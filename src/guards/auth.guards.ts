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
import { Observable } from "rxjs";
import { User } from "src/auth/schema/user.schema";

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(
    private JwtService: JwtService,
    @InjectModel(User.name) private readonly UserModel: Model<User>
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("Authentication start");

    const token = this.extractTokenFromHeader(request);
    // console.log(
    //   "auth",
    //   token,
    //   context.switchToHttp().getRequest().headers.authorization
    // );

    if (!token) {
      throw new UnauthorizedException("Invalid Token");
    }
    try {
      const payload = this.JwtService.verify(token);
      const user = await this.UserModel.findOne({ _id: payload.user });
      if (!user) {
        throw new UnauthorizedException("Invalid Token");
      }
      request.user = user;
    } catch (e) {
      Logger.error(e.message);
      throw new UnauthorizedException("Invalid Token");
    }
    console.log("Authentication start end");
    return true;
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    return req.headers.authorization?.split(" ")[1];
  }
}
