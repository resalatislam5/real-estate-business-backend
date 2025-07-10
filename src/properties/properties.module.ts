import { Module } from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {
  createProperties,
  createPropertiesSchema,
} from "./schema/create-properties.schema";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: createProperties.name, schema: createPropertiesSchema },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
