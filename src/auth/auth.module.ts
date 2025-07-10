import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {
  RefreshToken,
  RefreshTokenScheme,
} from "./schema/refresh-token.schema";
import { User, UserSchema } from "./schema/user.schema";

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("SECRET_TOKEN"),
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenScheme },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [MongooseModule],
})
export class AuthModule {}
