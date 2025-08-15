import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ContactModule } from "./contact/contact.module";
import { FileUploadModule } from "./file-upload/file-upload.module";
import { PropertiesModule } from "./properties/properties.module";
import { TestimonialModule } from "./testimonial/testimonial.module";
import { UserModule } from "./user/user.module";
import { VendorModule } from "./vendor/vendor.module";
import { WishlistModule } from "./wishlist/wishlist.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("SECRET_TOKEN"),
      }),
      global: true,
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGO_URI"),
      }),
      inject: [ConfigService],
    }),
    VendorModule,
    UserModule,
    AuthModule,
    ContactModule,
    FileUploadModule,
    PropertiesModule,
    WishlistModule,
    TestimonialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
