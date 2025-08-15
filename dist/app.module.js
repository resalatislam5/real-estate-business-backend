"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const contact_module_1 = require("./contact/contact.module");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const properties_module_1 = require("./properties/properties.module");
const testimonial_module_1 = require("./testimonial/testimonial.module");
const user_module_1 = require("./user/user.module");
const vendor_module_1 = require("./vendor/vendor.module");
const wishlist_module_1 = require("./wishlist/wishlist.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get("SECRET_TOKEN"),
                }),
                global: true,
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get("MONGO_URI"),
                }),
                inject: [config_1.ConfigService],
            }),
            vendor_module_1.VendorModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            contact_module_1.ContactModule,
            file_upload_module_1.FileUploadModule,
            properties_module_1.PropertiesModule,
            wishlist_module_1.WishlistModule,
            testimonial_module_1.TestimonialModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map